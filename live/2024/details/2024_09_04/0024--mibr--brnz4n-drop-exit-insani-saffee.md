### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Global Rank: [24](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_04.md)<br />
Regional Rank: [6]( ../../standings_americas_2024_09_04.md)<br />
<br />
Final Rank Value:  1286.0<br />
<br />
Final Rank Value (1286.0) = Starting Rank Value (1334.1) + Head To Head Adjustments (-48.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.557[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.302[<sup>2</sup>](#table1)
- LAN Wins: 0.531[<sup>2</sup>](#table1)

The average of these factors is 0.472<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1334.1
- 400 + ( ( 0.472 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 1334.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           86 |       27 | 2024-09-03 | 9z             | W   | 1.000      | 0.889        | 0.343 (0.305)    | 0.514 (0.457)    | 1 (1.000) |    21.30 | brnz4n, drop, exit, insani, saffee |
|           85 |      489 | 2024-08-21 | Hype           | W   | 1.000      | -            | -                | -                | -         |     2.39 | brnz4n, drop, exit, insani, saffee |
|           84 |      492 | 2024-08-21 | Hype           | W   | 1.000      | -            | -                | -                | -         |     2.45 | brnz4n, drop, exit, insani, saffee |
|           83 |      739 | 2024-08-13 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -26.05 | brnz4n, drop, exit, insani, saffee |
|           82 |      742 | 2024-08-13 | BESTIA         | W   | 1.000      | 0.450        | -                | 0.832 (0.374)    | -         |     4.97 | brnz4n, drop, exit, insani, saffee |
|           81 |      875 | 2024-08-09 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -5.95 | brnz4n, drop, exit, insani, saffee |
|           80 |      890 | 2024-08-09 | 9z             | L   | 1.000      | -            | -                | -                | -         |    -9.86 | brnz4n, drop, exit, insani, saffee |
|           79 |      958 | 2024-08-07 | HEROIC         | W   | 1.000      | -            | -                | -                | 1 (1.000) |    20.11 | brnz4n, drop, exit, insani, saffee |
|           78 |     1113 | 2024-08-02 | paiN           | L   | 0.982      | -            | -                | -                | -         |    -5.82 | brnz4n, drop, exit, insani, saffee |
|           77 |     1114 | 2024-08-02 | ODDIK          | L   | 0.981      | -            | -                | -                | -         |   -24.10 | brnz4n, drop, exit, insani, saffee |
|           76 |     1129 | 2024-08-02 | Fluxo          | W   | 0.980      | 0.371        | -                | 0.657 (0.239)    | -         |     7.90 | brnz4n, drop, exit, insani, saffee |
|           75 |     1155 | 2024-08-01 | ODDIK          | W   | 0.975      | 0.371        | 0.174 (0.063)    | 0.865 (0.312)    | -         |     6.28 | brnz4n, drop, exit, insani, saffee |
|           74 |     1201 | 2024-07-31 | Sharks         | W   | 0.968      | -            | -                | -                | -         |     5.49 | brnz4n, drop, exit, insani, saffee |
|           73 |     1210 | 2024-07-31 | ODDIK          | W   | 0.967      | 0.450        | 0.174 (0.076)    | 0.865 (0.377)    | -         |     6.82 | brnz4n, drop, exit, insani, saffee |
|           72 |     1215 | 2024-07-31 | ODDIK          | W   | 0.967      | 0.450        | 0.174 (0.076)    | 0.865 (0.376)    | -         |     7.25 | brnz4n, drop, exit, insani, saffee |
|           71 |     1243 | 2024-07-30 | Dusty Roots    | L   | 0.962      | -            | -                | -                | -         |   -28.71 | brnz4n, drop, exit, insani, saffee |
|           70 |     1246 | 2024-07-30 | Dusty Roots    | W   | 0.962      | -            | -                | -                | -         |     1.41 | brnz4n, drop, exit, insani, saffee |
|           69 |     1250 | 2024-07-30 | 9z Academy     | W   | 0.961      | -            | -                | -                | -         |     0.35 | brnz4n, drop, exit, insani, saffee |
|           68 |     1285 | 2024-07-29 | Imperial       | L   | 0.955      | -            | -                | -                | -         |   -21.56 | brnz4n, drop, exit, insani, saffee |
|           67 |     1311 | 2024-07-28 | RED Canids     | W   | 0.949      | -            | -                | -                | -         |     6.92 | brnz4n, drop, exit, insani, saffee |
|           66 |     1318 | 2024-07-28 | Imperial       | L   | 0.948      | -            | -                | -                | -         |   -22.52 | brnz4n, drop, exit, insani, saffee |
|           65 |     1407 | 2024-07-25 | Galorys        | W   | 0.928      | -            | -                | -                | -         |     1.31 | brnz4n, drop, exit, insani, saffee |
|           64 |     1412 | 2024-07-25 | Galorys        | W   | 0.927      | -            | -                | -                | -         |     1.33 | brnz4n, drop, exit, insani, saffee |
|           63 |     1675 | 2024-07-18 | The MongolZ    | L   | 0.879      | -            | -                | -                | -         |    -2.57 | brnz4n, drop, exit, insani, saffee |
|           62 |     1725 | 2024-07-17 | Spirit         | L   | 0.874      | -            | -                | -                | -         |    -0.89 | brnz4n, drop, exit, insani, saffee |
|           61 |     2095 | 2024-06-15 | Complexity     | L   | 0.659      | -            | -                | -                | -         |    -5.17 | brnz4n, drop, exit, insani, saffee |
|           60 |     2120 | 2024-06-14 | Alliance       | W   | 0.654      | -            | -                | -                | 1 (0.654) |     1.19 | brnz4n, drop, exit, insani, saffee |
|           59 |     2137 | 2024-06-14 | ENCE           | L   | 0.652      | -            | -                | -                | -         |   -13.96 | brnz4n, drop, exit, insani, saffee |
|           58 |     2376 | 2024-06-07 | Bounty Hunters | L   | 0.609      | -            | -                | -                | -         |   -18.15 | brnz4n, drop, exit, insani, saffee |
|           57 |     2435 | 2024-06-06 | 9z             | L   | 0.602      | -            | -                | -                | -         |    -8.20 | brnz4n, drop, exit, insani, saffee |
|           56 |     2507 | 2024-06-05 | BESTIA         | W   | 0.595      | 0.450        | -                | 0.832 (0.223)    | -         |     2.12 | brnz4n, drop, exit, insani, saffee |
|           55 |     2559 | 2024-06-04 | Galorys        | W   | 0.589      | -            | -                | -                | -         |     0.64 | brnz4n, drop, exit, insani, saffee |
|           54 |     2885 | 2024-05-22 | paiN           | W   | 0.501      | 0.450        | 0.419 (0.094)    | 0.963 (0.217)    | -         |    12.34 | brnz4n, drop, exit, insani, saffee |
|           53 |     2888 | 2024-05-22 | paiN           | W   | 0.501      | 0.450        | 0.419 (0.094)    | 0.963 (0.217)    | -         |    12.70 | brnz4n, drop, exit, insani, saffee |
|           52 |     2958 | 2024-05-20 | BetBoom        | L   | 0.488      | -            | -                | -                | -         |    -9.77 | brnz4n, drop, exit, insani, saffee |
|           51 |     2971 | 2024-05-20 | BIG            | W   | 0.486      | 0.769        | 0.148 (0.055)    | -                | -         |     5.01 | brnz4n, drop, exit, insani, saffee |
|           50 |     2980 | 2024-05-20 | BetBoom        | L   | 0.485      | -            | -                | -                | -         |    -9.96 | brnz4n, drop, exit, insani, saffee |
|           49 |     3057 | 2024-05-17 | HEROIC         | L   | 0.467      | -            | -                | -                | -         |    -7.44 | brnz4n, drop, exit, insani, saffee |
|           48 |     3091 | 2024-05-16 | Aurora         | W   | 0.461      | 0.769        | 0.299 (0.106)    | 0.636 (0.225)    | 1 (0.461) |     8.05 | brnz4n, drop, exit, insani, saffee |
|           47 |     3147 | 2024-05-15 | HEROIC         | L   | 0.453      | -            | -                | -                | -         |    -7.34 | brnz4n, drop, exit, insani, saffee |
|           46 |     3556 | 2024-04-28 | Aurora         | W   | 0.338      | 0.500        | 0.299 (0.051)    | -                | 1 (0.338) |     6.27 | brnz4n, drop, exit, insani, saffee |
|           45 |     3558 | 2024-04-27 | Apeks          | W   | 0.337      | -            | -                | -                | 1 (0.337) |     0.45 | brnz4n, drop, exit, insani, saffee |
|           44 |     3584 | 2024-04-27 | Rooster        | W   | 0.331      | -            | -                | -                | 1 (0.331) |     0.30 | brnz4n, drop, exit, insani, saffee |
|           43 |     3606 | 2024-04-26 | Rebels         | L   | 0.324      | -            | -                | -                | -         |    -9.39 | brnz4n, drop, exit, insani, saffee |
|           42 |     3609 | 2024-04-25 | KZG            | W   | 0.323      | -            | -                | -                | 1 (0.323) |     0.18 | brnz4n, drop, exit, insani, saffee |
|           41 |     3718 | 2024-04-20 | paiN           | L   | 0.287      | -            | -                | -                | -         |    -1.49 | brnz4n, drop, exit, insani, saffee |
|           40 |     3725 | 2024-04-20 | OG             | W   | 0.287      | -            | -                | -                | 1 (0.287) |     0.97 | brnz4n, drop, exit, insani, saffee |
|           39 |     3741 | 2024-04-19 | paiN           | W   | 0.283      | -            | -                | -                | -         |     7.59 | brnz4n, drop, exit, insani, saffee |
|           38 |     3748 | 2024-04-19 | FURIA          | W   | 0.282      | 0.589        | 0.317 (0.053)    | -                | 1 (0.282) |     7.50 | brnz4n, drop, exit, insani, saffee |
|           37 |     3770 | 2024-04-19 | paiN           | L   | 0.280      | -            | -                | -                | -         |    -1.27 | brnz4n, drop, exit, insani, saffee |
|           36 |     3791 | 2024-04-18 | Imperial       | W   | 0.276      | -            | -                | -                | -         |     1.57 | brnz4n, drop, exit, insani, saffee |
|           35 |     3793 | 2024-04-18 | paiN           | W   | 0.276      | -            | -                | -                | -         |     7.52 | brnz4n, drop, exit, insani, saffee |
|           34 |     3798 | 2024-04-18 | OG             | W   | 0.275      | -            | -                | -                | -         |     0.99 | brnz4n, drop, exit, insani, saffee |
|           33 |     3843 | 2024-04-17 | RED Canids     | W   | 0.269      | -            | -                | -                | -         |     1.04 | brnz4n, drop, exit, insani, saffee |
|           32 |     3849 | 2024-04-17 | Case           | W   | 0.268      | -            | -                | -                | -         |     0.86 | brnz4n, drop, exit, insani, saffee |
|           31 |     3888 | 2024-04-16 | Bounty Hunters | W   | 0.262      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           30 |     3909 | 2024-04-15 | Imperial       | W   | 0.255      | -            | -                | -                | -         |     1.47 | brnz4n, drop, exit, insani, saffee |
|           29 |     3923 | 2024-04-14 | Galorys        | W   | 0.248      | -            | -                | -                | -         |     0.28 | brnz4n, drop, exit, insani, saffee |
|           28 |     3937 | 2024-04-13 | Case           | W   | 0.241      | -            | -                | -                | -         |     0.78 | brnz4n, drop, exit, insani, saffee |
|           27 |     3967 | 2024-04-11 | paiN           | W   | 0.229      | -            | -                | -                | -         |     6.37 | brnz4n, drop, exit, insani, saffee |
|           26 |     4009 | 2024-04-10 | Galorys        | W   | 0.222      | -            | -                | -                | -         |     0.25 | brnz4n, drop, exit, insani, saffee |
|           25 |     4010 | 2024-04-10 | Galorys        | W   | 0.222      | -            | -                | -                | -         |     0.25 | brnz4n, drop, exit, insani, saffee |
|           24 |     4027 | 2024-04-10 | Imperial       | W   | 0.220      | -            | -                | -                | -         |     1.29 | brnz4n, drop, exit, insani, saffee |
|           23 |     4059 | 2024-04-09 | adalYamigos    | W   | 0.215      | -            | -                | -                | -         |     0.08 | brnz4n, drop, exit, insani, saffee |
|           22 |     4063 | 2024-04-09 | adalYamigos    | W   | 0.215      | -            | -                | -                | -         |     0.08 | brnz4n, drop, exit, insani, saffee |
|           21 |     4068 | 2024-04-09 | RED Canids     | W   | 0.215      | -            | -                | -                | -         |     0.87 | brnz4n, drop, exit, insani, saffee |
|           20 |     4100 | 2024-04-08 | W7M            | W   | 0.209      | -            | -                | -                | -         |     0.31 | brnz4n, drop, exit, insani, saffee |
|           19 |     4134 | 2024-04-07 | paiN           | W   | 0.203      | -            | -                | -                | -         |     5.71 | brnz4n, drop, exit, insani, saffee |
|           18 |     4152 | 2024-04-06 | Bounty Hunters | W   | 0.195      | -            | -                | -                | -         |     0.39 | brnz4n, drop, exit, insani, saffee |
|           17 |     4168 | 2024-04-05 | Fluxo          | W   | 0.189      | -            | -                | -                | -         |     0.22 | brnz4n, drop, exit, insani, saffee |
|           16 |     4169 | 2024-04-05 | Fluxo          | L   | 0.189      | -            | -                | -                | -         |    -5.73 | brnz4n, drop, exit, insani, saffee |
|           15 |     4172 | 2024-04-05 | ODDIK          | W   | 0.188      | -            | -                | -                | -         |     1.47 | brnz4n, drop, exit, insani, saffee |
|           14 |     4195 | 2024-04-04 | Solid          | W   | 0.182      | -            | -                | -                | -         |     0.35 | brnz4n, drop, exit, insani, saffee |
|           13 |     4199 | 2024-04-04 | Solid          | W   | 0.182      | -            | -                | -                | -         |     0.36 | brnz4n, drop, exit, insani, saffee |
|           12 |     4230 | 2024-04-03 | Fluxo          | W   | 0.176      | -            | -                | -                | -         |     0.20 | brnz4n, drop, exit, insani, saffee |
|           11 |     4280 | 2024-04-02 | Fluxo          | W   | 0.169      | -            | -                | -                | -         |     0.18 | brnz4n, drop, exit, insani, saffee |
|           10 |     4283 | 2024-04-02 | Sharks         | W   | 0.168      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|            9 |     4369 | 2024-03-27 | Case           | W   | 0.129      | -            | -                | -                | -         |     0.46 | brnz4n, drop, exit, insani, saffee |
|            8 |     4375 | 2024-03-27 | Case           | W   | 0.129      | -            | -                | -                | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|            7 |     4415 | 2024-03-26 | ODDIK          | W   | 0.122      | -            | -                | -                | -         |     1.04 | brnz4n, drop, exit, insani, saffee |
|            6 |     4417 | 2024-03-26 | ODDIK          | W   | 0.122      | -            | -                | -                | -         |     1.04 | brnz4n, drop, exit, insani, saffee |
|            5 |     4609 | 2024-03-14 | Sharks         | W   | 0.042      | -            | -                | -                | -         |     0.24 | brnz4n, drop, exit, insani, saffee |
|            4 |     4611 | 2024-03-14 | Sharks         | W   | 0.042      | -            | -                | -                | -         |     0.24 | brnz4n, drop, exit, insani, saffee |
|            3 |     4682 | 2024-03-12 | Fluxo          | L   | 0.028      | -            | -                | -                | -         |    -0.85 | brnz4n, drop, exit, insani, saffee |
|            2 |     4721 | 2024-03-10 | Galorys        | W   | 0.015      | -            | -                | -                | -         |     0.02 | brnz4n, drop, exit, insani, saffee |
|            1 |     4769 | 2024-03-08 | LA RUGONETA    | W   | 0.001      | -            | -                | -                | -         |     0.00 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,366.92)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-09 |      1.000 | $4,500.00      | $4,500.00       |
| 2024-08-02 |      0.982 | $4,000.00      | $3,927.68       |
| 2024-07-21 |      0.901 | $10,000.00     | $9,011.77       |
| 2024-06-16 |      0.666 | $3,000.00      | $1,999.17       |
| 2024-06-09 |      0.622 | $3,000.00      | $1,865.32       |
| 2024-04-28 |      0.338 | $50,000.00     | $16,917.94      |
| 2024-04-20 |      0.289 | $20,000.00     | $5,770.31       |
| 2024-04-15 |      0.255 | $25,000.00     | $6,374.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
