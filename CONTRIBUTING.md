# Guide de Contribution - Projet Terraform

Merci de votre intérêt pour contribuer à ce projet ! Ce document explique les bonnes pratiques pour collaborer efficacement.

---

## 🛠 Pré-requis
- **Terraform** installé (version >= 1.x)
- **tflint** et **terraform-docs** pour linting et documentation
- Compte **GitHub** et accès au dépôt

---

## ✅ Workflow de Contribution
1. **Forkez** le dépôt.
2. Créez une **branche** pour votre fonctionnalité :
   ```bash
   git checkout -b feature/nom-fonctionnalite
   ```
3. Développez votre code en respectant le [Style Guide](#style-guide).
4. Validez la syntaxe et le formatage :
   ```bash
   terraform fmt -recursive
   tflint
   ```
5. Testez le plan :
   ```bash
   terraform init
   terraform validate
   terraform plan
   ```
6. **Poussez** votre branche :
   ```bash
   git push origin feature/nom-fonctionnalite
   ```
7. Créez une **Pull Request** (PR) sur GitHub.

---

## 🔍 Code Review
- Chaque PR doit être **relue par au moins 1 reviewer** avant merge.
- Points vérifiés :
  - Respect du [Style Guide](#style-guide)
  - Pas de secrets dans le code (`.tfvars` sensibles doivent être ignorés)
  - Modules bien documentés
  - Tests et validations passés
- **Pas de merge direct sur `main`** : PR obligatoire.

---

## 🎨 Style Guide
- **Formatage** : `terraform fmt -recursive`
- **Linting** : `tflint`
- **Documentation** : `terraform-docs markdown table . > README.md` pour modules
- **Variables** :
  - Préfixer les variables avec le nom du module si nécessaire
  - Fournir des descriptions claires
- **Conventions de commit** :
  ```
  feat: ajoute module VPC
  fix: corrige bug dans outputs
  docs: met à jour README
  ```

---

## ⚙️ CI/CD
- **CI** via GitHub Actions :
  - Vérification du format (`terraform fmt`)
  - Lint (`tflint`)
  - Validation (`terraform validate`)
- **CD** (optionnel) :
  - Déploiement via `terraform apply` sur environnement staging/prod
  - Utilisation de **Terraform Cloud** ou **remote backend** sécurisé
- **Merge bloqué si CI échoue**.

---

## ✅ Avant de soumettre
- Vérifiez que votre branche est à jour :
  ```bash
  git fetch origin
  git rebase origin/main
  ```
- Exécutez :
  ```bash
  terraform fmt -recursive
  tflint
  terraform validate
  ```

---

Merci pour votre contribution ! 🎉
