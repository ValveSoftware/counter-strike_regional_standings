### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, Sdaim, shady, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1193.6<br />
<br />
Final Rank Value (1193.6) = Starting Rank Value (1102.5) + Head To Head Adjustments (91.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.471[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1102.5
- 400 + ( ( 0.347 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1102.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |        6 | 2024-07-24 | Revenant          | W   | 1.000      | 0.650        | 0.033 (0.021)    | 0.282 (0.183)    | 1 (1.000) |     4.73 | Forester, Krad, Sdaim, shady, TRAVIS    |
|           50 |       13 | 2024-07-24 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -16.79 | Forester, Krad, Sdaim, shady, TRAVIS    |
|           49 |      820 | 2024-06-09 | Monte             | W   | 0.900      | -            | -                | -                | 0 (0.000) |     7.11 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           48 |      843 | 2024-06-09 | B8                | W   | 0.899      | 0.143        | 0.206 (0.026)    | -                | 0 (0.000) |    12.25 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           47 |      913 | 2024-06-08 | Monte             | W   | 0.892      | -            | -                | -                | 0 (0.000) |     6.92 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           46 |      916 | 2024-06-08 | 1WIN              | W   | 0.892      | -            | -                | -                | 0 (0.000) |     7.08 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           45 |     1212 | 2024-06-01 | MOUZ NXT          | L   | 0.846      | -            | -                | -                | -         |   -16.49 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |     1230 | 2024-05-31 | Permitta          | W   | 0.841      | 0.435        | -                | 0.790 (0.289)    | 0 (0.000) |     4.72 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |     1477 | 2024-05-21 | GamerLegion       | L   | 0.774      | -            | -                | -                | -         |   -11.35 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |     1548 | 2024-05-19 | paiN              | W   | 0.760      | 0.769        | 0.393 (0.230)    | 0.825 (0.482)    | 0 (0.000) |    19.16 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |     1552 | 2024-05-19 | Liquid            | L   | 0.759      | -            | -                | -                | -         |    -3.85 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |     1572 | 2024-05-18 | paiN              | W   | 0.754      | 0.769        | 0.393 (0.228)    | 0.825 (0.478)    | -         |    19.65 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |     1970 | 2024-05-04 | BetBoom           | W   | 0.660      | 0.435        | 0.333 (0.095)    | 0.642 (0.184)    | -         |    17.50 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |     1980 | 2024-05-04 | Metizport         | W   | 0.658      | 0.435        | -                | 0.460 (0.132)    | -         |     6.21 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |     1985 | 2024-05-03 | Gaimin Gladiators | W   | 0.653      | 0.435        | 0.053 (0.015)    | 0.432 (0.123)    | -         |     8.01 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |     2006 | 2024-05-02 | BLEED             | W   | 0.647      | 0.435        | 0.126 (0.035)    | 0.482 (0.136)    | -         |     9.79 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |     2033 | 2024-05-01 | fnatic            | L   | 0.640      | -            | -                | -                | -         |    -1.81 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |     2056 | 2024-04-30 | Gaimin Gladiators | W   | 0.633      | -            | -                | -                | -         |     8.10 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |     2079 | 2024-04-29 | Permitta          | W   | 0.626      | 0.384        | -                | 0.790 (0.190)    | -         |     5.85 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |     2202 | 2024-04-24 | Nexus             | W   | 0.592      | -            | -                | -                | -         |     3.71 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |     2251 | 2024-04-21 | Gaimin Gladiators | L   | 0.573      | -            | -                | -                | -         |    -9.27 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |     2330 | 2024-04-19 | ENCE              | W   | 0.559      | 0.384        | 0.171 (0.037)    | -                | -         |    14.41 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |     2372 | 2024-04-18 | Apeks             | L   | 0.553      | -            | -                | -                | -         |   -11.59 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |     2380 | 2024-04-18 | ex-Guild Eagles   | W   | 0.552      | -            | -                | -                | -         |     3.51 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |     2454 | 2024-04-16 | B8                | W   | 0.538      | 0.384        | 0.206 (0.043)    | 0.933 (0.193)    | -         |     7.19 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |     2506 | 2024-04-12 | Aurora            | L   | 0.514      | -            | -                | -                | -         |    -1.09 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |     2542 | 2024-04-11 | BetBoom           | W   | 0.506      | 0.143        | 0.333 (0.024)    | -                | -         |    14.35 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |     2575 | 2024-04-10 | Apeks             | W   | 0.501      | -            | -                | -                | -         |     5.82 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |     2589 | 2024-04-10 | Enterprise        | L   | 0.498      | -            | -                | -                | -         |   -10.96 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     2799 | 2024-04-03 | Insilio           | W   | 0.454      | -            | -                | -                | -         |     4.24 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           21 |     2808 | 2024-04-03 | ex-Guild Eagles   | W   | 0.453      | -            | -                | -                | -         |     2.89 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           20 |     2818 | 2024-04-03 | Alliance          | W   | 0.452      | -            | -                | -                | -         |     3.46 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           19 |     2847 | 2024-04-02 | PARIVISION        | W   | 0.446      | -            | -                | -                | -         |     6.53 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           18 |     2852 | 2024-04-02 | ex-Guild Eagles   | L   | 0.446      | -            | -                | -                | -         |   -11.20 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           17 |     2860 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.445      | -            | -                | -                | -         |     5.29 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           16 |     3082 | 2024-03-18 | The MongolZ       | L   | 0.346      | -            | -                | -                | -         |    -0.11 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     3103 | 2024-03-17 | Apeks             | L   | 0.340      | -            | -                | -                | -         |    -7.03 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     3110 | 2024-03-17 | GamerLegion       | L   | 0.339      | -            | -                | -                | -         |    -8.43 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     3417 | 2024-03-05 | FORZE             | L   | 0.260      | -            | -                | -                | -         |    -5.74 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     3423 | 2024-03-05 | Zero Tenacity     | W   | 0.260      | -            | -                | -                | -         |     4.10 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     3518 | 2024-03-01 | BIG               | L   | 0.232      | -            | -                | -                | -         |    -1.84 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     3536 | 2024-02-28 | Young Ninjas      | L   | 0.220      | -            | -                | -                | -         |    -5.97 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     3797 | 2024-02-17 | 9 Pandas          | W   | 0.145      | -            | -                | -                | 1 (0.145) |     1.93 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     3827 | 2024-02-16 | Falcons           | W   | 0.139      | -            | -                | -                | 1 (0.139) |     3.81 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     3851 | 2024-02-15 | fnatic            | L   | 0.132      | -            | -                | -                | -         |    -0.23 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     3884 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.126      | -            | -                | -                | 1 (0.126) |     0.08 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     3889 | 2024-02-14 | Enterprise        | L   | 0.125      | -            | -                | -                | -         |    -2.79 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     3944 | 2024-02-10 | Sashi             | L   | 0.100      | -            | -                | -                | -         |    -1.29 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     3957 | 2024-02-09 | Nemiga            | L   | 0.094      | -            | -                | -                | -         |    -1.07 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     3974 | 2024-02-08 | RUBY              | W   | 0.087      | -            | -                | -                | -         |     0.85 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     3979 | 2024-02-08 | Insilio           | W   | 0.086      | -            | -                | -                | -         |     0.69 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,622.28)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.853 | $2,000.00      | $1,705.58       |
| 2024-05-23 |      0.787 | $12,500.00     | $9,831.65       |
| 2024-05-04 |      0.660 | $22,000.00     | $14,514.04      |
| 2024-05-02 |      0.647 | $1,500.00      | $969.93         |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
