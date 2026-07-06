### Roster Details<br />
Team Name: LAG<br />
Roster: consti, Cryptic, djay, kmrn, Sandman<br />
Global Rank: [137](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [30]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  866.8<br />
<br />
Final Rank Value (866.8) = Starting Rank Value (1039.5) + Head To Head Adjustments (-172.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.618[<sup>2</sup>](#table1)

The average of these factors is 0.339<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1039.5
- 400 + ( ( 0.339 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1039.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      345 | 2026-06-12 | Olympus         | L   | 1.000      | -            | -                | -                | -         |   -27.37 | consti, Cryptic, djay, kmrn, Sandman |
|           63 |      479 | 2026-06-06 | Villainous      | L   | 1.000      | -            | -                | -                | -         |   -25.47 | consti, Cryptic, djay, kmrn, Sandman |
|           62 |      647 | 2026-05-30 | SportsBetExpert | L   | 0.957      | -            | -                | -                | -         |   -18.68 | Cryptic, djay, kmrn, nicx, Sandman   |
|           61 |      651 | 2026-05-30 | Wanted Goons    | W   | 0.955      | 0.294        | -                | 0.172 (0.048)    | 1 (0.955) |     6.50 | Cryptic, djay, kmrn, nicx, Sandman   |
|           60 |      656 | 2026-05-30 | absolute cinema | W   | 0.955      | -            | -                | -                | 1 (0.955) |     1.44 | Cryptic, djay, kmrn, nicx, Sandman   |
|           59 |      667 | 2026-05-30 | Marsborne       | L   | 0.954      | -            | -                | -                | -         |   -13.12 | Cryptic, djay, kmrn, nicx, Sandman   |
|           58 |      678 | 2026-05-30 | makeSHIFT       | W   | 0.953      | -            | -                | -                | 1 (0.953) |     1.37 | Cryptic, djay, kmrn, nicx, Sandman   |
|           57 |     1915 | 2026-04-25 | Fisher College  | L   | 0.724      | -            | -                | -                | -         |    -8.62 | consti, Cryptic, djay, kmrn, Sandman |
|           56 |     1919 | 2026-04-25 | EMPIRE          | W   | 0.723      | -            | -                | -                | 1 (0.723) |     5.13 | consti, Cryptic, djay, kmrn, Sandman |
|           55 |     1930 | 2026-04-25 | NRG             | L   | 0.722      | -            | -                | -                | -         |    -5.71 | consti, Cryptic, djay, kmrn, Sandman |
|           54 |     1939 | 2026-04-25 | EMPIRE          | W   | 0.721      | -            | -                | -                | 1 (0.721) |     5.15 | consti, Cryptic, djay, kmrn, Sandman |
|           53 |     2275 | 2026-04-11 | Aether          | L   | 0.630      | -            | -                | -                | -         |   -15.22 | consti, Cryptic, djay, kmrn, Sandman |
|           52 |     2303 | 2026-04-10 | Villainous      | L   | 0.623      | -            | -                | -                | -         |   -16.71 | consti, Cryptic, djay, kmrn, Sandman |
|           51 |     2380 | 2026-04-07 | Iowa Stormboar  | L   | 0.603      | -            | -                | -                | -         |   -14.31 | consti, Cryptic, djay, kmrn, Sandman |
|           50 |     2384 | 2026-04-07 | BOSS            | L   | 0.602      | -            | -                | -                | -         |   -14.28 | consti, Cryptic, djay, kmrn, Sandman |
|           49 |     2418 | 2026-04-06 | Zomblers        | W   | 0.596      | 0.363        | 0.010 (0.002)    | 0.328 (0.071)    | 0 (0.000) |     3.15 | consti, Cryptic, djay, kmrn, Sandman |
|           48 |     2453 | 2026-04-05 | Surge           | W   | 0.590      | -            | -                | -                | 0 (0.000) |     1.19 | consti, Cryptic, djay, kmrn, Sandman |
|           47 |     2514 | 2026-04-04 | BOSS            | W   | 0.583      | 0.363        | -                | 0.220 (0.047)    | -         |     4.59 | consti, Cryptic, djay, kmrn, Sandman |
|           46 |     2520 | 2026-04-04 | Clockwork       | W   | 0.582      | -            | -                | -                | -         |     0.62 | consti, Cryptic, djay, kmrn, Sandman |
|           45 |     2592 | 2026-04-03 | Fisher College  | L   | 0.577      | -            | -                | -                | -         |    -8.88 | consti, Cryptic, djay, kmrn, Sandman |
|           44 |     2598 | 2026-04-03 | Iowa Stormboar  | L   | 0.576      | -            | -                | -                | -         |   -14.28 | consti, Cryptic, djay, kmrn, Sandman |
|           43 |     2677 | 2026-04-02 | Club 333        | W   | 0.570      | 0.363        | 0.013 (0.003)    | -                | -         |     2.30 | consti, Cryptic, djay, kmrn, Sandman |
|           42 |     2688 | 2026-04-02 | FarmVille       | W   | 0.569      | 0.769        | 0.005 (0.002)    | 0.280 (0.122)    | -         |     3.37 | consti, Cryptic, djay, kmrn, Sandman |
|           41 |     2779 | 2026-04-01 | BOSS            | W   | 0.563      | 0.769        | -                | 0.220 (0.095)    | -         |     4.35 | consti, Cryptic, djay, kmrn, Sandman |
|           40 |     2785 | 2026-04-01 | EMPIRE          | L   | 0.563      | -            | -                | -                | -         |   -14.76 | consti, Cryptic, djay, kmrn, Sandman |
|           39 |     2869 | 2026-03-31 | Olympus         | W   | 0.557      | 0.769        | -                | 0.114 (0.049)    | -         |     0.98 | consti, Cryptic, djay, kmrn, Sandman |
|           38 |     3033 | 2026-03-29 | BOSS            | L   | 0.542      | -            | -                | -                | -         |   -13.30 | consti, Cryptic, djay, kmrn, Sandman |
|           37 |     3038 | 2026-03-29 | Fisher College  | W   | 0.541      | 0.398        | 0.043 (0.009)    | 0.378 (0.081)    | -         |     8.73 | consti, Cryptic, djay, kmrn, Sandman |
|           36 |     3053 | 2026-03-29 | Fisher College  | L   | 0.541      | -            | -                | -                | -         |    -8.50 | consti, Cryptic, djay, kmrn, Sandman |
|           35 |     3113 | 2026-03-28 | NuTorious       | W   | 0.536      | -            | -                | -                | 1 (0.536) |     0.76 | consti, Cryptic, djay, kmrn, Sandman |
|           34 |     3117 | 2026-03-28 | EMPIRE          | W   | 0.536      | -            | -                | -                | -         |     2.63 | consti, Cryptic, djay, kmrn, Sandman |
|           33 |     3148 | 2026-03-28 | EMPIRE          | W   | 0.534      | -            | -                | -                | 1 (0.534) |     2.81 | consti, Cryptic, djay, kmrn, Sandman |
|           32 |     3167 | 2026-03-28 | Zealous         | W   | 0.533      | -            | -                | -                | 1 (0.533) |     0.48 | consti, Cryptic, djay, kmrn, Sandman |
|           31 |     3195 | 2026-03-27 | Sola            | W   | 0.530      | -            | -                | -                | -         |     0.89 | consti, djay, kmrn, Sandman, Wolffe  |
|           30 |     3279 | 2026-03-25 | Aether          | L   | 0.517      | -            | -                | -                | -         |   -14.01 | consti, Cryptic, djay, kmrn, Sandman |
|           29 |     3331 | 2026-03-24 | F5              | W   | 0.510      | 0.363        | 0.005 (0.001)    | 0.281 (0.052)    | -         |     4.00 | consti, Cryptic, djay, kmrn, Sandman |
|           28 |     3389 | 2026-03-23 | insane players  | L   | 0.504      | -            | -                | -                | -         |   -13.78 | consti, Cryptic, djay, kmrn, Sandman |
|           27 |     3513 | 2026-03-21 | Shimmer         | W   | 0.490      | 0.363        | 0.011 (0.002)    | -                | -         |     1.69 | consti, Cryptic, djay, kmrn, Sandman |
|           26 |     3572 | 2026-03-20 | Wanted Goons    | W   | 0.484      | -            | -                | -                | -         |     2.04 | consti, Cryptic, djay, kmrn, Sandman |
|           25 |     4033 | 2026-03-10 | Chicken Coop    | W   | 0.416      | 0.143        | 0.038 (0.002)    | -                | -         |     5.91 | consti, djay, kmrn, Sandman, Wolffe  |
|           24 |     4150 | 2026-03-08 | Wanted Goons    | W   | 0.403      | -            | -                | -                | -         |     1.83 | consti, djay, kmrn, Sandman, Wolffe  |
|           23 |     4504 | 2026-03-01 | Wildcard        | L   | 0.355      | -            | -                | -                | -         |    -2.10 | consti, djay, kmrn, Sandman, Wolffe  |
|           22 |     4539 | 2026-02-28 | BOSS            | W   | 0.350      | 0.769        | -                | 0.220 (0.059)    | -         |     2.22 | consti, djay, kmrn, Sandman, Wolffe  |
|           21 |     4544 | 2026-02-28 | Aether          | W   | 0.349      | -            | -                | -                | -         |     1.36 | consti, djay, kmrn, Sandman, Wolffe  |
|           20 |     4585 | 2026-02-27 | Voca            | L   | 0.344      | -            | -                | -                | -         |    -4.79 | consti, djay, kmrn, Sandman, Wolffe  |
|           19 |     4637 | 2026-02-26 | FlyQuest RED    | W   | 0.337      | -            | -                | -                | -         |     0.73 | consti, djay, kmrn, Sandman, Wolffe  |
|           18 |     4839 | 2026-02-22 | FarmVille       | W   | 0.309      | -            | -                | -                | -         |     1.43 | consti, djay, kmrn, Sandman, Wolffe  |
|           17 |     4963 | 2026-02-20 | Wildcard        | W   | 0.297      | 0.333        | 0.109 (0.011)    | 0.517 (0.051)    | -         |     7.75 | consti, djay, kmrn, Sandman, Wolffe  |
|           16 |     5015 | 2026-02-19 | Iowa Stormboar  | L   | 0.290      | -            | -                | -                | -         |    -7.56 | consti, djay, kmrn, Sandman, Wolffe  |
|           15 |     5060 | 2026-02-18 | M80             | L   | 0.283      | -            | -                | -                | -         |    -1.45 | consti, djay, kmrn, Sandman, Wolffe  |
|           14 |     5064 | 2026-02-18 | Aether          | W   | 0.283      | -            | -                | -                | -         |     1.09 | consti, djay, kmrn, Sandman, Wolffe  |
|           13 |     5132 | 2026-02-17 | regain          | W   | 0.275      | 0.363        | 0.009 (0.001)    | -                | -         |     1.32 | consti, djay, kmrn, Sandman, Wolffe  |
|           12 |     5218 | 2026-02-16 | Villainous      | W   | 0.265      | -            | -                | -                | -         |     0.90 | consti, djay, kmrn, Sandman, Wolffe  |
|           11 |     5226 | 2026-02-15 | BOSS            | W   | 0.263      | -            | -                | -                | -         |     0.84 | consti, djay, kmrn, Sandman, Wolffe  |
|           10 |     5233 | 2026-02-15 | FarmVille       | W   | 0.262      | -            | -                | -                | -         |     0.73 | consti, djay, kmrn, Sandman, Wolffe  |
|            9 |     5283 | 2026-02-14 | OverKnight      | W   | 0.256      | -            | -                | -                | -         |     0.34 | consti, djay, kmrn, Sandman, Wolffe  |
|            8 |     5395 | 2026-02-12 | insane players  | W   | 0.243      | -            | -                | -                | -         |     1.12 | consti, djay, kmrn, Sandman, Wolffe  |
|            7 |     5467 | 2026-02-10 | Chicken Coop    | W   | 0.230      | 0.333        | 0.038 (0.003)    | -                | -         |     3.44 | consti, djay, kmrn, Sandman, Wolffe  |
|            6 |     5510 | 2026-02-09 | Rave            | L   | 0.222      | -            | -                | -                | -         |    -6.33 | consti, djay, kmrn, Sandman, Wolffe  |
|            5 |     5559 | 2026-02-07 | Shimmer         | W   | 0.210      | -            | -                | -                | -         |     0.84 | consti, djay, kmrn, Sandman, Wolffe  |
|            4 |     5624 | 2026-02-05 | Wildcard        | L   | 0.197      | -            | -                | -                | -         |    -1.03 | consti, djay, kmrn, Sandman, Wolffe  |
|            3 |     5648 | 2026-02-04 | Outfit 49       | W   | 0.190      | -            | -                | -                | -         |     0.48 | consti, djay, kmrn, Sandman, Wolffe  |
|            2 |     5671 | 2026-02-03 | Zomblers        | W   | 0.183      | -            | -                | -                | -         |     0.84 | consti, djay, kmrn, Sandman, Wolffe  |
|            1 |     5702 | 2026-02-02 | Reign Above     | W   | 0.177      | -            | -                | -                | -         |     0.21 | consti, djay, kmrn, Sandman, Wolffe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,401.30)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.650 | $250.00        | $162.38         |
| 2026-04-09 |      0.617 | $1,500.00      | $925.14         |
| 2026-03-29 |      0.543 | $1,050.00      | $570.23         |
| 2026-03-29 |      0.541 | $15,000.00     | $8,121.36       |
| 2026-03-27 |      0.530 | $1,500.00      | $795.03         |
| 2026-02-22 |      0.309 | $5,000.00      | $1,546.28       |
| 2026-02-15 |      0.263 | $4,000.00      | $1,051.33       |
| 2026-02-10 |      0.230 | $1,000.00      | $229.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
