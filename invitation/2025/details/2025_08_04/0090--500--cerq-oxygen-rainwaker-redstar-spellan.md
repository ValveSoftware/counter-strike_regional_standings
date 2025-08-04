### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN<br />
Global Rank: [90](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [62]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  838.1<br />
<br />
Final Rank Value (838.1) = Starting Rank Value (808.0) + Head To Head Adjustments (30.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 808.0
- 400 + ( ( 0.215 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 808.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      430 | 2025-07-10 | modeame            | L   | 1.000      | -            | -                | -                | -         |   -22.70 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           54 |      585 | 2025-06-22 | FUT                | L   | 0.913      | -            | -                | -                | -         |    -4.38 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           53 |      604 | 2025-06-21 | ECLOT              | W   | 0.905      | 0.435        | 0.081 (0.032)    | 0.761 (0.299)    | 0 (0.000) |    15.64 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           52 |      614 | 2025-06-20 | AMKAL              | W   | 0.900      | 0.435        | -                | 0.647 (0.253)    | 0 (0.000) |    14.03 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           51 |      628 | 2025-06-19 | Iberian Soul       | L   | 0.894      | -            | -                | -                | -         |    -2.72 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           50 |      959 | 2025-05-31 | 9INE               | L   | 0.767      | -            | -                | -                | -         |    -5.24 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           49 |      966 | 2025-05-30 | ENCE               | L   | 0.760      | -            | -                | -                | -         |    -4.13 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           48 |     1071 | 2025-05-22 | TPuDCATb TPu       | L   | 0.706      | -            | -                | -                | -         |    -9.70 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           47 |     1116 | 2025-05-20 | Spirit Academy     | L   | 0.694      | -            | -                | -                | -         |    -5.47 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           46 |     1212 | 2025-05-16 | RUBY               | L   | 0.665      | -            | -                | -                | -         |    -8.74 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           45 |     1253 | 2025-05-14 | PARIVISION         | L   | 0.653      | -            | -                | -                | -         |    -6.11 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           44 |     1309 | 2025-05-12 | Eternal Fire       | W   | 0.641      | 0.384        | -                | 0.487 (0.120)    | 0 (0.000) |     8.17 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           43 |     1445 | 2025-05-07 | Passion UA         | W   | 0.607      | 0.143        | 0.097 (0.008)    | 1.000 (0.087)    | 0 (0.000) |    16.69 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           42 |     1482 | 2025-05-06 | ECSTATIC           | L   | 0.600      | -            | -                | -                | -         |    -1.94 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           41 |     1530 | 2025-05-04 | TPuDCATb TPu       | W   | 0.587      | 0.384        | 0.019 (0.004)    | 0.983 (0.222)    | 0 (0.000) |    10.00 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           40 |     1577 | 2025-05-02 | Partizan           | W   | 0.574      | 0.143        | 0.077 (0.006)    | 0.782 (0.064)    | 0 (0.000) |    11.91 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           39 |     1670 | 2025-04-28 | Maestro            | W   | 0.547      | -            | -                | -                | 0 (0.000) |     2.43 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           38 |     1753 | 2025-04-25 | ENCE               | L   | 0.526      | -            | -                | -                | -         |    -3.36 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           37 |     1756 | 2025-04-25 | Wildcard           | L   | 0.526      | -            | -                | -                | -         |    -5.09 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           36 |     1765 | 2025-04-24 | Imperial           | L   | 0.521      | -            | -                | -                | -         |    -4.43 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           35 |     1779 | 2025-04-23 | Imperial Valkyries | W   | 0.513      | -            | -                | -                | 0 (0.000) |     7.52 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|           34 |     1950 | 2025-04-15 | GamerLegion        | L   | 0.458      | -            | -                | -                | -         |    -0.23 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           33 |     1962 | 2025-04-14 | BIG                | L   | 0.453      | -            | -                | -                | -         |    -1.74 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           32 |     1971 | 2025-04-14 | ENCE               | L   | 0.451      | -            | -                | -                | -         |    -3.17 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           31 |     2917 | 2025-03-16 | OG                 | L   | 0.261      | -            | -                | -                | -         |    -2.10 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           30 |     2925 | 2025-03-16 | ENCE               | W   | 0.259      | 0.435        | 0.137 (0.015)    | 0.768 (0.086)    | 0 (0.000) |     6.31 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           29 |     2957 | 2025-03-15 | FUT                | W   | 0.252      | 0.435        | 0.298 (0.033)    | 0.878 (0.096)    | 0 (0.000) |     6.25 | CeRq, oxygeN, POP0V, Rainwaker, SPELLAN   |
|           28 |     2987 | 2025-03-13 | ECLOT              | W   | 0.240      | 0.435        | 0.081 (0.008)    | 0.761 (0.079)    | -         |     5.18 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           27 |     3055 | 2025-03-10 | Monte              | W   | 0.220      | -            | -                | -                | -         |     2.62 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           26 |     3098 | 2025-03-09 | Passion UA         | L   | 0.214      | -            | -                | -                | -         |    -0.52 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           25 |     3129 | 2025-03-09 | Leo                | L   | 0.212      | -            | -                | -                | -         |    -5.36 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           24 |     3165 | 2025-03-08 | Zero Tenacity      | L   | 0.207      | -            | -                | -                | -         |    -2.88 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           23 |     3197 | 2025-03-08 | Nexus              | W   | 0.206      | -            | -                | -                | -         |     4.26 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           22 |     3256 | 2025-03-07 | fnatic             | L   | 0.200      | -            | -                | -                | -         |    -0.52 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           21 |     3295 | 2025-03-06 | Betclic            | W   | 0.195      | 0.435        | 0.042 (0.004)    | -                | -         |     4.75 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           20 |     3377 | 2025-03-04 | 9 Pandas           | W   | 0.179      | -            | -                | -                | -         |     2.91 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           19 |     3389 | 2025-03-03 | 9 Pandas           | W   | 0.174      | -            | -                | -                | -         |     2.86 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           18 |     3444 | 2025-03-01 | Portuguese Family  | W   | 0.160      | -            | -                | -                | -         |     0.93 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           17 |     3536 | 2025-02-26 | Partizan           | W   | 0.139      | 0.435        | 0.077 (0.005)    | 0.782 (0.047)    | -         |     3.06 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           16 |     3563 | 2025-02-25 | Fire Flux          | L   | 0.135      | -            | -                | -                | -         |    -2.25 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           15 |     3594 | 2025-02-24 | Betera             | W   | 0.128      | -            | -                | -                | -         |     1.91 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           14 |     3816 | 2025-02-16 | CYBERSHOKE         | L   | 0.073      | -            | -                | -                | -         |    -0.95 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           13 |     3831 | 2025-02-15 | Partizan           | W   | 0.068      | -            | -                | -                | -         |     1.51 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           12 |     3851 | 2025-02-15 | B8                 | W   | 0.066      | 0.435        | 0.139 (0.004)    | -                | -         |     1.92 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           11 |     3871 | 2025-02-14 | BC.Game            | L   | 0.061      | -            | -                | -                | -         |    -0.92 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|           10 |     3879 | 2025-02-14 | ECLOT              | W   | 0.060      | -            | -                | -                | -         |     1.33 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            9 |     3891 | 2025-02-13 | 9 Pandas           | W   | 0.055      | -            | -                | -                | -         |     0.90 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            8 |     3899 | 2025-02-13 | fnatic             | L   | 0.053      | -            | -                | -                | -         |    -0.12 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            7 |     3949 | 2025-02-11 | NXT                | W   | 0.039      | -            | -                | -                | -         |     0.71 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            6 |     4017 | 2025-02-09 | Astralis           | L   | 0.026      | -            | -                | -                | -         |    -0.00 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            5 |     4070 | 2025-02-08 | OG                 | W   | 0.020      | -            | -                | -                | -         |     0.09 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            4 |     4076 | 2025-02-08 | BIG                | W   | 0.019      | -            | -                | -                | -         |     0.56 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            3 |     4115 | 2025-02-07 | BC.Game            | W   | 0.012      | -            | -                | -                | -         |     0.20 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            2 |     4141 | 2025-02-06 | SAW                | W   | 0.005      | -            | -                | -                | -         |     0.17 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |
|            1 |     4163 | 2025-02-05 | moneyF             | W   | 0.000      | -            | -                | -                | -         |     0.00 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,962.14)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.914 | $5,000.00      | $4,569.39       |
| 2025-06-01 |      0.774 | $1,090.00      | $843.71         |
| 2025-05-11 |      0.635 | $1,000.00      | $634.78         |
| 2025-04-27 |      0.540 | $1,500.00      | $810.32         |
| 2025-03-16 |      0.261 | $10,000.00     | $2,607.19       |
| 2025-02-15 |      0.068 | $22,000.00     | $1,496.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
