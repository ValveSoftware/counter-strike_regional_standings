### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [70](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [52]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  929.5<br />
<br />
Final Rank Value (929.5) = Starting Rank Value (915.3) + Head To Head Adjustments (14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.389[<sup>2</sup>](#table1)
- Opponent Network: 0.219[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.3
- 400 + ( ( 0.269 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 915.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           85 |      770 | 2024-09-10 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -18.35 | Burmylov, Neityu, PR, TOBIZ, xelex    |
|           84 |      787 | 2024-09-09 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -14.41 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           83 |      795 | 2024-09-08 | ZEROvariant       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.25 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           82 |      887 | 2024-09-05 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -22.48 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           81 |     1093 | 2024-08-29 | TSM               | W   | 0.972      | 0.384        | 0.048 (0.018)    | 0.800 (0.299)    | 0 (0.000) |    17.48 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           80 |     1133 | 2024-08-28 | Monte             | L   | 0.966      | -            | -                | -                | -         |   -14.13 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           79 |     1213 | 2024-08-27 | ALTERNATE aTTaX   | L   | 0.957      | -            | -                | -                | -         |   -18.64 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           78 |     1248 | 2024-08-26 | CYBERSHOKE        | W   | 0.953      | 0.435        | 0.044 (0.018)    | 0.798 (0.331)    | 0 (0.000) |    15.69 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           77 |     1476 | 2024-08-21 | Into the Breach   | W   | 0.918      | 0.384        | -                | 0.687 (0.242)    | 0 (0.000) |    12.38 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           76 |     1576 | 2024-08-17 | GUN5              | L   | 0.893      | -            | -                | -                | -         |   -17.06 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           75 |     1587 | 2024-08-17 | RUSTEC            | W   | 0.892      | -            | -                | -                | 0 (0.000) |     1.65 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           74 |     1643 | 2024-08-15 | CYBERSHOKE        | L   | 0.879      | -            | -                | -                | -         |   -14.17 | Burmylov, Neityu, PR, sirah, TMB      |
|           73 |     1665 | 2024-08-14 | kONO              | W   | 0.871      | 0.384        | -                | 0.455 (0.152)    | 0 (0.000) |     8.98 | Burmylov, Neityu, PR, sirah, TMB      |
|           72 |     1819 | 2024-08-09 | Endpoint          | L   | 0.838      | -            | -                | -                | -         |   -15.51 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           71 |     1848 | 2024-08-08 | AMKAL             | W   | 0.831      | 0.426        | 0.088 (0.031)    | -                | 0 (0.000) |    14.51 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           70 |     2017 | 2024-08-03 | 1WIN              | L   | 0.800      | -            | -                | -                | -         |   -16.71 | Burmylov, Neityu, PR, sirah, TOBIZ    |
|           69 |     2225 | 2024-07-29 | CYBERSHOKE        | W   | 0.766      | 0.426        | 0.044 (0.014)    | 0.798 (0.260)    | 0 (0.000) |    10.61 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           68 |     2228 | 2024-07-29 | Monte Gen         | W   | 0.765      | 0.426        | -                | 0.539 (0.176)    | 0 (0.000) |     9.38 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           67 |     2284 | 2024-07-27 | fnatic            | L   | 0.753      | -            | -                | -                | -         |    -4.29 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           66 |     2356 | 2024-07-25 | Aurora Young Blud | W   | 0.738      | 0.435        | -                | 0.622 (0.199)    | 0 (0.000) |     9.09 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           65 |     2479 | 2024-07-21 | fnatic            | L   | 0.712      | -            | -                | -                | -         |    -4.21 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           64 |     2519 | 2024-07-20 | BLEED             | W   | 0.705      | 0.500        | 0.077 (0.027)    | 0.536 (0.189)    | -         |    15.96 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           63 |     2531 | 2024-07-19 | Rhyno             | W   | 0.700      | 0.500        | -                | 0.497 (0.174)    | -         |     9.39 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           62 |     2584 | 2024-07-18 | Ninjas in Pyjamas | L   | 0.693      | -            | -                | -                | -         |    -2.84 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           61 |     2730 | 2024-07-16 | Rhyno             | W   | 0.678      | 0.500        | -                | 0.497 (0.168)    | -         |     9.31 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           60 |     3109 | 2024-06-13 | B8                | L   | 0.457      | -            | -                | -                | -         |    -5.19 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           59 |     3170 | 2024-06-10 | Endpoint          | L   | 0.439      | -            | -                | -                | -         |    -7.57 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           58 |     3209 | 2024-06-09 | GhoulsW           | W   | 0.433      | -            | -                | -                | -         |     0.54 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           57 |     3221 | 2024-06-09 | BLEED             | L   | 0.432      | -            | -                | -                | -         |    -3.74 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           56 |     3285 | 2024-06-08 | Sampi             | W   | 0.426      | -            | -                | -                | -         |     5.98 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           55 |     3293 | 2024-06-08 | ECLOT             | L   | 0.425      | -            | -                | -                | -         |    -4.96 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           54 |     3320 | 2024-06-07 | GamerLegion       | L   | 0.420      | -            | -                | -                | -         |    -5.09 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           53 |     3386 | 2024-06-06 | Rhyno             | W   | 0.413      | -            | -                | -                | -         |     5.26 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           52 |     3411 | 2024-06-06 | Entropiq          | W   | 0.412      | -            | -                | -                | -         |     0.52 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           51 |     3515 | 2024-06-04 | NAVI Junior       | W   | 0.398      | -            | -                | -                | -         |     4.80 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           50 |     3521 | 2024-06-04 | Aurora Young Blud | W   | 0.397      | -            | -                | -                | -         |     4.64 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           49 |     3560 | 2024-06-02 | FURIA             | L   | 0.385      | -            | -                | -                | -         |    -0.35 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           48 |     3591 | 2024-06-01 | AMKAL             | W   | 0.378      | 0.435        | 0.088 (0.014)    | -                | -         |     7.81 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           47 |     3652 | 2024-05-30 | Sangal            | W   | 0.364      | 0.435        | 0.218 (0.034)    | -                | -         |     9.59 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           46 |     3693 | 2024-05-28 | RUBY              | W   | 0.353      | -            | -                | -                | -         |     4.07 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           45 |     3721 | 2024-05-27 | Nexus             | W   | 0.344      | -            | -                | -                | -         |     2.97 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           44 |     3728 | 2024-05-26 | 9 Pandas          | L   | 0.339      | -            | -                | -                | -         |    -4.43 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           43 |     3736 | 2024-05-26 | B8                | W   | 0.338      | 0.435        | 0.188 (0.028)    | -                | -         |     7.47 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           42 |     3760 | 2024-05-25 | 3DMAX             | W   | 0.331      | 0.435        | 0.433 (0.062)    | -                | -         |    10.13 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           41 |     3775 | 2024-05-24 | Illuminar         | W   | 0.324      | -            | -                | -                | -         |     3.84 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           40 |     3787 | 2024-05-23 | Rare Atom         | W   | 0.318      | -            | -                | -                | -         |     3.37 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           39 |     3827 | 2024-05-22 | Rhyno             | L   | 0.312      | -            | -                | -                | -         |    -5.28 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           38 |     3869 | 2024-05-21 | DMS               | L   | 0.305      | -            | -                | -                | -         |    -5.76 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           37 |     3939 | 2024-05-19 | BLEED             | L   | 0.291      | -            | -                | -                | -         |    -2.16 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           36 |     4005 | 2024-05-17 | DMS               | W   | 0.277      | -            | -                | -                | -         |     3.50 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           35 |     4029 | 2024-05-16 | Sampi             | W   | 0.272      | -            | -                | -                | -         |     4.55 | Chr1zN, Neityu, PR, sirah, TOBIZ      |
|           34 |     4089 | 2024-05-15 | BLEED             | L   | 0.264      | -            | -                | -                | -         |    -1.82 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           33 |     4145 | 2024-05-14 | B8                | L   | 0.258      | -            | -                | -                | -         |    -2.63 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           32 |     4169 | 2024-05-13 | Space             | W   | 0.250      | -            | -                | -                | -         |     2.50 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           31 |     4191 | 2024-05-12 | B8                | L   | 0.245      | -            | -                | -                | -         |    -2.57 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           30 |     4202 | 2024-05-11 | Endpoint          | W   | 0.240      | -            | -                | -                | -         |     4.46 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           29 |     4231 | 2024-05-10 | Aurora            | W   | 0.234      | 0.435        | 0.191 (0.019)    | -                | -         |     6.37 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           28 |     4301 | 2024-05-07 | RUSH B            | W   | 0.212      | -            | -                | -                | -         |     2.33 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           27 |     4343 | 2024-05-05 | GL Academy        | W   | 0.198      | -            | -                | -                | -         |     0.65 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           26 |     4346 | 2024-05-04 | Enterprise        | L   | 0.193      | -            | -                | -                | -         |    -4.73 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           25 |     4366 | 2024-05-03 | Nemiga            | L   | 0.186      | -            | -                | -                | -         |    -1.58 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           24 |     4383 | 2024-05-02 | Endpoint          | L   | 0.180      | -            | -                | -                | -         |    -2.37 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           23 |     4399 | 2024-05-02 | ALTERNATE aTTaX   | W   | 0.178      | -            | -                | -                | -         |     3.52 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           22 |     4404 | 2024-05-02 | 9 Pandas          | L   | 0.177      | -            | -                | -                | -         |    -2.38 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           21 |     4419 | 2024-05-01 | BLEED             | W   | 0.172      | -            | -                | -                | -         |     1.74 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           20 |     4431 | 2024-04-30 | ECLOT             | W   | 0.167      | -            | -                | -                | -         |     3.74 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           19 |     4441 | 2024-04-30 | NewBALLS          | W   | 0.165      | -            | -                | -                | -         |     0.44 | Burmylov, Chr1zN, PR, sirah, TOBIZ    |
|           18 |     4455 | 2024-04-29 | Nemiga            | L   | 0.160      | -            | -                | -                | -         |    -1.38 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           17 |     4465 | 2024-04-29 | ex-Preasy         | W   | 0.158      | -            | -                | -                | -         |     0.89 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           16 |     4495 | 2024-04-27 | ECLOT             | W   | 0.146      | -            | -                | -                | -         |     3.31 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           15 |     4565 | 2024-04-25 | Insilio           | L   | 0.131      | -            | -                | -                | -         |    -1.91 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           14 |     4579 | 2024-04-24 | PARIVISION        | L   | 0.125      | -            | -                | -                | -         |    -1.48 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           13 |     4611 | 2024-04-22 | EYEBALLERS        | W   | 0.112      | -            | -                | -                | -         |     0.99 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           12 |     4618 | 2024-04-22 | Nemiga            | L   | 0.111      | -            | -                | -                | -         |    -0.94 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           11 |     4629 | 2024-04-21 | ALTERNATE aTTaX   | W   | 0.106      | -            | -                | -                | -         |     2.08 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|           10 |     4635 | 2024-04-21 | ECLOT             | L   | 0.105      | -            | -                | -                | -         |    -0.95 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            9 |     4657 | 2024-04-20 | BLEED             | L   | 0.099      | -            | -                | -                | -         |    -2.21 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            8 |     4744 | 2024-04-18 | Enterprise        | W   | 0.086      | -            | -                | -                | -         |     0.62 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            7 |     4766 | 2024-04-18 | ENCE Academy      | W   | 0.084      | -            | -                | -                | -         |     0.47 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            6 |     4813 | 2024-04-17 | JANO              | W   | 0.077      | -            | -                | -                | -         |     0.38 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            5 |     4826 | 2024-04-16 | GamerLegion       | L   | 0.072      | -            | -                | -                | -         |    -1.67 | Anlelele, Burmylov, Neityu, PR, sirah |
|            4 |     4852 | 2024-04-15 | Alliance          | W   | 0.064      | -            | -                | -                | -         |     0.70 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            3 |     4893 | 2024-04-12 | Permitta          | L   | 0.045      | -            | -                | -                | -         |    -0.70 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            2 |     5020 | 2024-04-09 | Zero Tenacity     | W   | 0.025      | -            | -                | -                | -         |     0.53 | Burmylov, Chr1zN, Neityu, PR, sirah   |
|            1 |     5050 | 2024-04-08 | B8                | W   | 0.018      | -            | -                | -                | -         |     0.40 | Burmylov, Chr1zN, Neityu, PR, sirah   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,278.78)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      1.000 | $500.00        | $500.00         |
| 2024-08-28 |      0.966 | $2,000.00      | $1,932.95       |
| 2024-07-28 |      0.760 | $2,000.00      | $1,519.43       |
| 2024-07-22 |      0.719 | $12,500.00     | $8,990.00       |
| 2024-06-02 |      0.386 | $5,000.00      | $1,928.43       |
| 2024-05-26 |      0.339 | $10,000.00     | $3,392.91       |
| 2024-05-18 |      0.286 | $500.00        | $143.18         |
| 2024-05-12 |      0.246 | $5,000.00      | $1,231.78       |
| 2024-05-03 |      0.186 | $25,000.00     | $4,640.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
