### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, Sdaim, topo, TRAVIS<br />
Global Rank: [31](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [23]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1208.0<br />
<br />
Final Rank Value (1208.0) = Starting Rank Value (1157.7) + Head To Head Adjustments (50.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.532[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.232[<sup>2</sup>](#table1)
- LAN Wins: 0.261[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1157.7
- 400 + ( ( 0.367 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1157.7


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
|           55 |        9 | 2024-07-31 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -10.46 | Forester, Krad, Sdaim, topo, TRAVIS     |
|           54 |      152 | 2024-07-27 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.88 | Forester, Krad, Sdaim, shady, TRAVIS    |
|           53 |      186 | 2024-07-26 | DMS               | W   | 1.000      | 0.650        | -                | 0.447 (0.291)    | 1 (1.000) |     4.83 | Forester, Krad, Sdaim, shady, TRAVIS    |
|           52 |      220 | 2024-07-25 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -2.65 | Forester, Krad, Sdaim, shady, TRAVIS    |
|           51 |      248 | 2024-07-24 | Revenant          | W   | 1.000      | 0.650        | 0.027 (0.018)    | 0.262 (0.170)    | 1 (1.000) |     4.09 | Forester, Krad, Sdaim, shady, TRAVIS    |
|           50 |      255 | 2024-07-24 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -9.86 | Forester, Krad, Sdaim, shady, TRAVIS    |
|           49 |     1062 | 2024-06-09 | Monte             | W   | 0.853      | -            | -                | -                | 0 (0.000) |     7.34 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           48 |     1085 | 2024-06-09 | B8                | W   | 0.852      | 0.143        | 0.168 (0.020)    | 0.879 (0.107)    | 0 (0.000) |    10.98 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           47 |     1155 | 2024-06-08 | Monte             | W   | 0.845      | -            | -                | -                | 0 (0.000) |     7.14 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           46 |     1158 | 2024-06-08 | 1WIN              | W   | 0.845      | -            | -                | -                | 0 (0.000) |     5.82 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           45 |     1454 | 2024-06-01 | MOUZ NXT          | L   | 0.798      | -            | -                | -                | -         |   -16.19 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |     1472 | 2024-05-31 | Permitta          | W   | 0.793      | 0.435        | -                | 0.799 (0.276)    | 0 (0.000) |     3.94 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |     1719 | 2024-05-21 | GamerLegion       | L   | 0.727      | -            | -                | -                | -         |   -12.09 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |     1790 | 2024-05-19 | paiN              | W   | 0.712      | 0.769        | 0.305 (0.167)    | 0.796 (0.436)    | -         |    16.57 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |     1794 | 2024-05-19 | Liquid            | L   | 0.712      | -            | -                | -                | -         |    -4.04 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |     1814 | 2024-05-18 | paiN              | W   | 0.706      | 0.769        | 0.305 (0.166)    | 0.796 (0.432)    | -         |    17.05 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |     2212 | 2024-05-04 | BetBoom           | W   | 0.612      | 0.435        | 0.259 (0.069)    | 0.554 (0.147)    | -         |    15.45 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |     2222 | 2024-05-04 | Metizport         | W   | 0.611      | 0.435        | -                | 0.427 (0.113)    | -         |     4.70 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |     2227 | 2024-05-03 | Gaimin Gladiators | W   | 0.606      | 0.435        | 0.040 (0.011)    | -                | -         |     5.83 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |     2248 | 2024-05-02 | BLEED             | W   | 0.600      | 0.435        | 0.096 (0.025)    | -                | -         |     7.58 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |     2275 | 2024-05-01 | fnatic            | L   | 0.592      | -            | -                | -                | -         |    -1.95 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |     2298 | 2024-04-30 | Gaimin Gladiators | W   | 0.586      | -            | -                | -                | -         |     5.75 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |     2321 | 2024-04-29 | Permitta          | W   | 0.579      | 0.384        | -                | 0.799 (0.178)    | -         |     4.46 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |     2444 | 2024-04-24 | Nexus             | W   | 0.545      | -            | -                | -                | -         |     2.71 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |     2493 | 2024-04-21 | Gaimin Gladiators | L   | 0.525      | -            | -                | -                | -         |   -10.48 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |     2572 | 2024-04-19 | ENCE              | W   | 0.512      | 0.384        | 0.175 (0.034)    | -                | -         |    13.57 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |     2614 | 2024-04-18 | Apeks             | L   | 0.506      | -            | -                | -                | -         |   -11.96 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |     2622 | 2024-04-18 | ex-Guild Eagles   | W   | 0.505      | -            | -                | -                | -         |     2.42 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |     2696 | 2024-04-16 | B8                | W   | 0.491      | 0.384        | 0.168 (0.032)    | 0.879 (0.166)    | -         |     5.75 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |     2748 | 2024-04-12 | Aurora            | L   | 0.466      | -            | -                | -                | -         |    -0.81 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |     2784 | 2024-04-11 | BetBoom           | W   | 0.458      | 0.143        | 0.259 (0.017)    | -                | -         |    12.14 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |     2817 | 2024-04-10 | Apeks             | W   | 0.453      | -            | -                | -                | -         |     3.86 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |     2831 | 2024-04-10 | Enterprise        | L   | 0.451      | -            | -                | -                | -         |   -10.94 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     3041 | 2024-04-03 | Insilio           | W   | 0.406      | -            | -                | -                | -         |     2.90 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           21 |     3050 | 2024-04-03 | ex-Guild Eagles   | W   | 0.406      | -            | -                | -                | -         |     1.90 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           20 |     3060 | 2024-04-03 | Alliance          | W   | 0.405      | -            | -                | -                | -         |     2.30 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           19 |     3089 | 2024-04-02 | PARIVISION        | W   | 0.399      | -            | -                | -                | -         |     5.79 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           18 |     3094 | 2024-04-02 | ex-Guild Eagles   | L   | 0.398      | -            | -                | -                | -         |   -10.71 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           17 |     3102 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.397      | -            | -                | -                | -         |     3.73 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           16 |     3324 | 2024-03-18 | The MongolZ       | L   | 0.299      | -            | -                | -                | -         |    -0.10 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     3345 | 2024-03-17 | Apeks             | L   | 0.293      | -            | -                | -                | -         |    -7.03 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     3352 | 2024-03-17 | GamerLegion       | L   | 0.292      | -            | -                | -                | -         |    -8.00 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     3659 | 2024-03-05 | FORZE             | L   | 0.213      | -            | -                | -                | -         |    -5.26 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     3665 | 2024-03-05 | Zero Tenacity     | W   | 0.213      | -            | -                | -                | -         |     2.93 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     3760 | 2024-03-01 | BIG               | L   | 0.184      | -            | -                | -                | -         |    -2.22 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     3778 | 2024-02-28 | Young Ninjas      | L   | 0.172      | -            | -                | -                | -         |    -4.90 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     4039 | 2024-02-17 | 9 Pandas          | W   | 0.098      | -            | -                | -                | 1 (0.098) |     0.95 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     4069 | 2024-02-16 | Falcons           | W   | 0.091      | -            | -                | -                | 1 (0.091) |     2.41 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     4093 | 2024-02-15 | fnatic            | L   | 0.084      | -            | -                | -                | -         |    -0.22 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     4126 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.079      | -            | -                | -                | 1 (0.079) |     0.04 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     4131 | 2024-02-14 | Enterprise        | L   | 0.078      | -            | -                | -                | -         |    -1.93 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     4186 | 2024-02-10 | Sashi             | L   | 0.053      | -            | -                | -                | -         |    -0.80 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     4199 | 2024-02-09 | Nemiga            | L   | 0.046      | -            | -                | -                | -         |    -0.71 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     4216 | 2024-02-08 | RUBY              | W   | 0.040      | -            | -                | -                | -         |     0.29 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     4221 | 2024-02-08 | Insilio           | W   | 0.039      | -            | -                | -                | -         |     0.23 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,352.47)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-02 |      0.806 | $2,000.00      | $1,611.00       |
| 2024-05-23 |      0.739 | $12,500.00     | $9,240.55       |
| 2024-05-04 |      0.612 | $22,000.00     | $13,473.71      |
| 2024-05-02 |      0.599 | $1,500.00      | $899.00         |
| 2024-03-20 |      0.313 | $10,000.00     | $3,128.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
