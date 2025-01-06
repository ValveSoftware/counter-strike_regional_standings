### Roster Details<br />
Team Name: 9 Pandas<br />
Roster: d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey<br />
Global Rank: [31](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1198.9<br />
<br />
Final Rank Value (1198.9) = Starting Rank Value (1123.8) + Head To Head Adjustments (75.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.437[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.235[<sup>2</sup>](#table1)

The average of these factors is 0.366<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1123.8
- 400 + ( ( 0.366 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1123.8


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
|           65 |      561 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.910      | -            | -                | -                | -         |   -18.17 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           64 |      590 | 2024-11-22 | Aurora            | W   | 0.904      | -            | -                | -                | 1 (0.904) |     6.63 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           63 |      621 | 2024-11-21 | Virtus.pro        | L   | 0.897      | -            | -                | -                | -         |   -10.24 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           62 |      632 | 2024-11-21 | G2                | L   | 0.892      | -            | -                | -                | -         |    -0.36 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           61 |      642 | 2024-11-20 | Astralis          | W   | 0.891      | 0.143        | 0.316 (0.040)    | -                | 1 (0.891) |    19.16 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           60 |      892 | 2024-11-11 | ECLOT             | W   | 0.825      | 0.371        | 0.267 (0.082)    | 1.000 (0.306)    | 0 (0.000) |    13.89 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           59 |      904 | 2024-11-10 | ECLOT             | W   | 0.821      | 0.384        | 0.267 (0.084)    | 1.000 (0.315)    | 0 (0.000) |    14.85 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           58 |      908 | 2024-11-10 | 500               | L   | 0.819      | -            | -                | -                | -         |   -17.68 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           57 |      926 | 2024-11-09 | Gaimin Gladiators | W   | 0.813      | 0.384        | -                | 0.876 (0.274)    | 0 (0.000) |     7.65 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           56 |      930 | 2024-11-09 | NAVI Junior       | W   | 0.813      | 0.371        | 0.191 (0.057)    | 1.000 (0.301)    | 0 (0.000) |    10.56 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           55 |      945 | 2024-11-08 | Fire Flux         | W   | 0.805      | -            | -                | -                | 0 (0.000) |     3.97 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           54 |      959 | 2024-11-07 | Aurora            | L   | 0.800      | -            | -                | -                | -         |   -18.99 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           53 |      964 | 2024-11-07 | ECLOT             | W   | 0.799      | 0.371        | 0.267 (0.079)    | 1.000 (0.296)    | 0 (0.000) |    13.74 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           52 |      990 | 2024-11-05 | Insilio           | W   | 0.788      | -            | -                | -                | 0 (0.000) |     2.06 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           51 |      999 | 2024-11-05 | los kogutos       | W   | 0.786      | 0.371        | -                | 0.876 (0.255)    | -         |     7.26 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           50 |     1037 | 2024-11-03 | Gaimin Gladiators | W   | 0.773      | 0.384        | -                | 0.876 (0.260)    | -         |     7.71 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           49 |     1060 | 2024-11-02 | Endpoint          | W   | 0.766      | -            | -                | -                | -         |     3.84 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           48 |     1086 | 2024-11-01 | NAVI Junior       | W   | 0.759      | 0.371        | 0.191 (0.054)    | 1.000 (0.281)    | -         |    10.50 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           47 |     1107 | 2024-10-31 | 9INE              | W   | 0.752      | 0.384        | 0.115 (0.033)    | 1.000 (0.289)    | -         |     8.90 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           46 |     1126 | 2024-10-30 | Johnny Speeds     | W   | 0.746      | 0.384        | 0.105 (0.030)    | -                | -         |     9.73 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           45 |     1160 | 2024-10-28 | Verdant           | W   | 0.732      | -            | -                | -                | -         |     4.84 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           44 |     1222 | 2024-10-25 | Fire Flux         | W   | 0.713      | -            | -                | -                | -         |     4.17 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           43 |     1295 | 2024-10-20 | ECLOT             | L   | 0.679      | -            | -                | -                | -         |    -7.61 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           42 |     1361 | 2024-10-17 | SAW               | L   | 0.661      | -            | -                | -                | -         |    -4.15 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           41 |     1394 | 2024-10-16 | TSM               | W   | 0.654      | -            | -                | -                | -         |     5.10 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           40 |     1420 | 2024-10-15 | Zero Tenacity     | W   | 0.648      | 0.500        | 0.081 (0.026)    | -                | -         |     9.54 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           39 |     1462 | 2024-10-12 | NewBALLS          | W   | 0.627      | -            | -                | -                | -         |     0.76 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           38 |     1605 | 2024-10-06 | GamerLegion       | L   | 0.587      | -            | -                | -                | -         |    -4.61 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           37 |     1636 | 2024-10-05 | ECSTATIC          | W   | 0.580      | 0.435        | -                | 1.000 (0.252)    | -         |     6.83 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           36 |     1676 | 2024-10-04 | DMS               | W   | 0.573      | -            | -                | -                | -         |     2.55 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           35 |     2152 | 2024-09-22 | Nemiga            | L   | 0.492      | -            | -                | -                | -         |    -4.43 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           34 |     2169 | 2024-09-21 | Nexus             | L   | 0.487      | -            | -                | -                | -         |    -3.44 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           33 |     2176 | 2024-09-21 | devils.one        | W   | 0.486      | -            | -                | -                | -         |     1.72 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           32 |     2223 | 2024-09-19 | CPH Wolves        | L   | 0.474      | -            | -                | -                | -         |   -12.11 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           31 |     2237 | 2024-09-19 | Nemiga            | L   | 0.472      | -            | -                | -                | -         |    -4.46 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           30 |     2291 | 2024-09-17 | Kosovo            | W   | 0.461      | -            | -                | -                | -         |     0.69 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           29 |     2314 | 2024-09-16 | los kogutos       | L   | 0.453      | -            | -                | -                | -         |    -7.09 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           28 |     2337 | 2024-09-15 | K27               | W   | 0.447      | -            | -                | -                | -         |     0.69 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           27 |     2345 | 2024-09-15 | Johnny Speeds     | L   | 0.446      | -            | -                | -                | -         |    -8.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           26 |     2355 | 2024-09-15 | Spotless          | W   | 0.445      | -            | -                | -                | -         |     0.21 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           25 |     2594 | 2024-09-06 | B8                | W   | 0.388      | 0.500        | 0.162 (0.031)    | -                | -         |     6.22 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           24 |     2948 | 2024-08-27 | FURIA             | L   | 0.319      | -            | -                | -                | -         |    -0.73 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           23 |     2985 | 2024-08-26 | Eternal Fire      | L   | 0.315      | -            | -                | -                | -         |    -1.89 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           22 |     3057 | 2024-08-25 | FURIA             | W   | 0.308      | -            | -                | -                | 1 (0.308) |     9.03 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           21 |     3117 | 2024-08-23 | Nemiga            | W   | 0.293      | -            | -                | -                | -         |     6.60 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           20 |     3142 | 2024-08-22 | Cloud9            | L   | 0.286      | -            | -                | -                | -         |    -5.17 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           19 |     3182 | 2024-08-21 | Rebels            | W   | 0.280      | -            | -                | -                | -         |     1.46 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           18 |     3211 | 2024-08-21 | Insilio           | W   | 0.279      | -            | -                | -                | -         |     1.24 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           17 |     3246 | 2024-08-20 | PARIVISION        | L   | 0.273      | -            | -                | -                | -         |    -6.57 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           16 |     3429 | 2024-08-13 | SINNERS           | W   | 0.228      | -            | -                | -                | -         |     3.35 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           15 |     3479 | 2024-08-12 | KOI               | W   | 0.221      | -            | -                | -                | -         |     1.81 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           14 |     3559 | 2024-08-09 | Nemiga            | L   | 0.200      | -            | -                | -                | -         |    -1.88 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           13 |     3627 | 2024-08-07 | Zero Tenacity     | W   | 0.187      | -            | -                | -                | -         |     2.39 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           12 |     3674 | 2024-08-06 | GUN5              | W   | 0.180      | -            | -                | -                | -         |     2.37 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           11 |     3709 | 2024-08-05 | Johnny Speeds     | W   | 0.172      | -            | -                | -                | -         |     2.45 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|           10 |     3745 | 2024-08-04 | Insilio           | W   | 0.165      | -            | -                | -                | -         |     0.78 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            9 |     3771 | 2024-08-03 | GUN5              | W   | 0.160      | -            | -                | -                | -         |     2.14 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            8 |     3800 | 2024-08-02 | 9INE              | W   | 0.154      | -            | -                | -                | -         |     1.61 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            7 |     3813 | 2024-08-02 | Illuminar         | W   | 0.152      | -            | -                | -                | -         |     0.40 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            6 |     3834 | 2024-08-01 | PARIVISION        | L   | 0.148      | -            | -                | -                | -         |    -3.63 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            5 |     3926 | 2024-07-30 | TSM               | L   | 0.134      | -            | -                | -                | -         |    -3.36 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            4 |     3936 | 2024-07-30 | Insilio           | W   | 0.133      | -            | -                | -                | -         |     0.62 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            3 |     3994 | 2024-07-28 | QUAZAR            | W   | 0.121      | -            | -                | -                | -         |     0.25 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            2 |     4160 | 2024-07-23 | Betera            | W   | 0.087      | -            | -                | -                | -         |     0.21 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |
|            1 |     4391 | 2024-07-17 | 3DMAX             | L   | 0.048      | -            | -                | -                | -         |    -0.21 | clax, d1Ledez, glowiing, iDISBALANCE, shalfey   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,801.53)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.833 | $500.00        | $416.73         |
| 2024-11-11 |      0.825 | $11,000.00     | $9,080.46       |
| 2024-11-10 |      0.821 | $12,500.00     | $10,260.88      |
| 2024-10-20 |      0.680 | $6,000.00      | $4,079.71       |
| 2024-10-06 |      0.588 | $5,000.00      | $2,939.32       |
| 2024-09-24 |      0.506 | $4,000.00      | $2,024.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
