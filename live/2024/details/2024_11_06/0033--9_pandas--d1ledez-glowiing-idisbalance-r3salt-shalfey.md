### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey<br />
Global Rank: [33](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  1128.5<br />
<br />
Final Rank Value (1128.5) = Starting Rank Value (1005.9) + Head To Head Adjustments (122.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.393[<sup>2</sup>](#table1)
- Opponent Network: 0.355[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1005.9
- 400 + ( ( 0.309 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 1005.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |       14 | 2024-11-05 | Insilio           | W   | 1.000      | 0.426        | -                | 0.730 (0.311)    | 0 (0.000) |     8.83 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           68 |       23 | 2024-11-05 | Permitta          | W   | 1.000      | 0.371        | -                | 1.000 (0.371)    | 0 (0.000) |     6.82 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           67 |       61 | 2024-11-03 | Gaimin Gladiators | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.74 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           66 |       84 | 2024-11-02 | Endpoint          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.93 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           65 |      110 | 2024-11-01 | NAVI Junior       | W   | 1.000      | 0.371        | 0.065 (0.024)    | 0.841 (0.312)    | 0 (0.000) |    14.06 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           64 |      131 | 2024-10-31 | 9INE              | W   | 1.000      | 0.384        | 0.054 (0.021)    | 0.813 (0.312)    | 0 (0.000) |    14.29 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           63 |      150 | 2024-10-30 | Johnny Speeds     | W   | 1.000      | 0.384        | 0.064 (0.024)    | 1.000 (0.384)    | 0 (0.000) |    13.21 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           62 |      184 | 2024-10-28 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.36 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           61 |      246 | 2024-10-25 | Fire Flux         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.06 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           60 |      319 | 2024-10-20 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -17.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           59 |      385 | 2024-10-17 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -2.36 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           58 |      418 | 2024-10-16 | TSM               | W   | 1.000      | 0.500        | 0.042 (0.021)    | 0.725 (0.362)    | -         |    10.63 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           57 |      444 | 2024-10-15 | Zero Tenacity     | W   | 1.000      | 0.500        | 0.060 (0.030)    | 0.792 (0.396)    | -         |    15.67 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           56 |      486 | 2024-10-12 | NewBALLS          | W   | 1.000      | -            | -                | -                | -         |     1.87 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           55 |      629 | 2024-10-06 | GamerLegion       | L   | 0.994      | -            | -                | -                | -         |   -12.72 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           54 |      660 | 2024-10-05 | ECSTATIC          | W   | 0.987      | 0.435        | -                | 0.928 (0.398)    | -         |    14.88 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           53 |      700 | 2024-10-04 | DMS               | W   | 0.980      | -            | -                | -                | -         |     8.89 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           52 |     1176 | 2024-09-22 | Nemiga            | L   | 0.899      | -            | -                | -                | -         |    -5.38 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           51 |     1193 | 2024-09-21 | Nexus             | L   | 0.894      | -            | -                | -                | -         |   -23.20 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           50 |     1200 | 2024-09-21 | devils.one        | W   | 0.893      | -            | -                | -                | -         |     5.31 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           49 |     1247 | 2024-09-19 | CPH Wolves        | L   | 0.881      | -            | -                | -                | -         |   -23.90 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |     1261 | 2024-09-19 | Nemiga            | L   | 0.879      | -            | -                | -                | -         |    -6.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |     1315 | 2024-09-17 | The Suspect       | W   | 0.867      | -            | -                | -                | -         |     3.98 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |     1338 | 2024-09-16 | Permitta          | L   | 0.860      | -            | -                | -                | -         |   -17.88 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |     1361 | 2024-09-15 | K27               | W   | 0.854      | -            | -                | -                | -         |     1.90 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |     1369 | 2024-09-15 | Johnny Speeds     | L   | 0.853      | -            | -                | -                | -         |   -17.32 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |     1379 | 2024-09-15 | Spotless          | W   | 0.852      | -            | -                | -                | -         |     0.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |     1618 | 2024-09-06 | B8                | W   | 0.794      | 0.500        | 0.158 (0.063)    | 1.000 (0.397)    | -         |    16.53 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |     1972 | 2024-08-27 | FURIA             | L   | 0.726      | -            | -                | -                | -         |    -1.77 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |     2009 | 2024-08-26 | Eternal Fire      | L   | 0.722      | -            | -                | -                | -         |    -0.80 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |     2081 | 2024-08-25 | FURIA             | W   | 0.714      | 0.143        | 0.175 (0.018)    | -                | 1 (0.714) |    20.96 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     2141 | 2024-08-23 | Nemiga            | W   | 0.699      | 0.143        | 0.416 (0.042)    | -                | -         |    18.37 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     2166 | 2024-08-22 | Cloud9            | L   | 0.693      | -            | -                | -                | -         |   -13.95 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     2206 | 2024-08-21 | Rebels            | W   | 0.687      | -            | -                | -                | -         |     7.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     2235 | 2024-08-21 | Insilio           | W   | 0.686      | -            | -                | -                | -         |     5.75 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     2270 | 2024-08-20 | PARIVISION        | L   | 0.680      | -            | -                | -                | -         |   -10.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     2453 | 2024-08-13 | SINNERS           | W   | 0.634      | 0.500        | 0.090 (0.028)    | 0.974 (0.309)    | -         |    11.06 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           32 |     2503 | 2024-08-12 | KOI               | W   | 0.628      | -            | -                | -                | -         |     4.60 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           31 |     2583 | 2024-08-09 | Nemiga            | L   | 0.607      | -            | -                | -                | -         |    -3.25 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           30 |     2651 | 2024-08-07 | Zero Tenacity     | W   | 0.593      | 0.426        | 0.060 (0.015)    | -                | -         |     9.04 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           29 |     2698 | 2024-08-06 | GUN5              | W   | 0.587      | -            | -                | -                | -         |     5.84 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           28 |     2733 | 2024-08-05 | Johnny Speeds     | W   | 0.579      | -            | -                | -                | -         |     9.63 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           27 |     2769 | 2024-08-04 | Insilio           | W   | 0.572      | -            | -                | -                | -         |     6.25 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           26 |     2795 | 2024-08-03 | GUN5              | W   | 0.567      | -            | -                | -                | -         |     5.96 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           25 |     2824 | 2024-08-02 | 9INE              | W   | 0.561      | -            | -                | -                | -         |     7.46 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           24 |     2837 | 2024-08-02 | Illuminar         | W   | 0.559      | -            | -                | -                | -         |     9.53 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           23 |     2858 | 2024-08-01 | PARIVISION        | L   | 0.554      | -            | -                | -                | -         |    -7.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           22 |     2950 | 2024-07-30 | TSM               | L   | 0.541      | -            | -                | -                | -         |   -10.68 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           21 |     2960 | 2024-07-30 | Insilio           | W   | 0.540      | -            | -                | -                | -         |     6.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           20 |     3018 | 2024-07-28 | QUAZAR            | W   | 0.528      | -            | -                | -                | -         |     2.03 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           19 |     3184 | 2024-07-23 | Betera            | W   | 0.494      | -            | -                | -                | -         |     1.35 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           18 |     3415 | 2024-07-17 | 3DMAX             | L   | 0.455      | -            | -                | -                | -         |    -1.01 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           17 |     3941 | 2024-06-10 | Aurora            | L   | 0.206      | -            | -                | -                | -         |    -2.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           16 |     3943 | 2024-06-10 | SINNERS           | W   | 0.206      | -            | -                | -                | -         |     4.49 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           15 |     3948 | 2024-06-10 | 3DMAX             | L   | 0.205      | -            | -                | -                | -         |    -0.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           14 |     3982 | 2024-06-09 | RUSH B            | L   | 0.200      | -            | -                | -                | -         |    -4.72 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           13 |     3991 | 2024-06-09 | PARIVISION        | L   | 0.199      | -            | -                | -                | -         |    -2.83 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           12 |     3997 | 2024-06-09 | SAW               | W   | 0.199      | -            | -                | -                | -         |     6.05 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           11 |     4007 | 2024-06-09 | Monte             | W   | 0.199      | -            | -                | -                | -         |     0.99 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           10 |     4270 | 2024-06-04 | Sangal            | L   | 0.167      | -            | -                | -                | -         |    -0.62 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            9 |     4494 | 2024-05-26 | MOUZ NXT          | W   | 0.107      | -            | -                | -                | -         |     0.90 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            8 |     4498 | 2024-05-26 | 1WIN              | W   | 0.106      | -            | -                | -                | -         |     0.59 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            7 |     4512 | 2024-05-25 | SovvyKiNG         | W   | 0.101      | -            | -                | -                | -         |     0.63 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            6 |     4538 | 2024-05-24 | SINNERS           | W   | 0.093      | -            | -                | -                | -         |     2.09 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            5 |     4667 | 2024-05-20 | BLEED             | L   | 0.067      | -            | -                | -                | -         |    -1.71 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            4 |     4720 | 2024-05-18 | Passion UA        | W   | 0.054      | -            | -                | -                | -         |     0.87 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            3 |     4792 | 2024-05-16 | ALTERNATE aTTaX   | W   | 0.041      | -            | -                | -                | -         |     0.53 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            2 |     4953 | 2024-05-12 | BetBoom           | L   | 0.013      | -            | -                | -                | -         |    -0.18 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |
|            1 |     4979 | 2024-05-11 | RUBY              | W   | 0.007      | -            | -                | -                | -         |     0.04 | clax, d1Ledez, glowiing, iDISBALANCE, seized    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,059.19)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-10-06 |      0.995 | $5,000.00      | $4,973.48       |
| 2024-09-24 |      0.913 | $4,000.00      | $3,651.77       |
| 2024-06-09 |      0.201 | $5,000.00      | $1,005.66       |
| 2024-05-26 |      0.107 | $22,000.00     | $2,357.22       |
| 2024-05-12 |      0.014 | $5,000.00      | $71.06          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
