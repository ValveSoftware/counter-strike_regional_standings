### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, ICY, Krad, Sdaim, TRAVIS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [31](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1249.5<br />
<br />
Final Rank Value (1249.5) = Starting Rank Value (1121.3) + Head To Head Adjustments (128.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.534[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.249[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.336<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1121.3
- 400 + ( ( 0.336 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1121.3


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
|           50 |      532 | 2024-06-09 | Monte             | W   | 0.948      | -            | -                | -                | 0 (0.000) |     7.36 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           49 |      555 | 2024-06-09 | B8                | W   | 0.946      | 0.143        | 0.246 (0.033)    | 1.000 (0.135)    | 0 (0.000) |    12.84 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           48 |      625 | 2024-06-08 | Monte             | W   | 0.939      | -            | -                | -                | 0 (0.000) |     7.19 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           47 |      628 | 2024-06-08 | 1WIN              | W   | 0.939      | -            | -                | -                | 0 (0.000) |     7.63 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           46 |      924 | 2024-06-01 | MOUZ NXT          | L   | 0.893      | -            | -                | -                | -         |   -17.43 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           45 |      942 | 2024-05-31 | Permitta          | W   | 0.888      | 0.435        | -                | 0.794 (0.306)    | 0 (0.000) |     4.71 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           44 |     1189 | 2024-05-21 | GamerLegion       | L   | 0.821      | -            | -                | -                | -         |   -10.78 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           43 |     1260 | 2024-05-19 | paiN              | W   | 0.807      | 0.769        | 0.476 (0.295)    | 0.763 (0.473)    | 0 (0.000) |    21.27 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           42 |     1264 | 2024-05-19 | Liquid            | L   | 0.806      | -            | -                | -                | -         |    -2.89 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           41 |     1284 | 2024-05-18 | paiN              | W   | 0.801      | 0.769        | 0.476 (0.293)    | 0.763 (0.470)    | 0 (0.000) |    21.77 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           40 |     1682 | 2024-05-04 | BetBoom           | W   | 0.707      | 0.435        | 0.403 (0.124)    | 0.704 (0.216)    | -         |    19.64 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           39 |     1692 | 2024-05-04 | Metizport         | W   | 0.705      | 0.435        | 0.064 (0.020)    | 0.478 (0.147)    | -         |     6.98 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           38 |     1697 | 2024-05-03 | Gaimin Gladiators | W   | 0.700      | 0.435        | 0.067 (0.020)    | 0.488 (0.148)    | -         |     9.61 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           37 |     1718 | 2024-05-02 | BLEED             | W   | 0.694      | 0.435        | 0.156 (0.047)    | 0.538 (0.162)    | -         |    11.49 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           36 |     1745 | 2024-05-01 | fnatic            | L   | 0.687      | -            | -                | -                | -         |    -2.27 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           35 |     1768 | 2024-04-30 | Gaimin Gladiators | W   | 0.681      | -            | -                | -                | -         |     9.85 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           34 |     1791 | 2024-04-29 | Permitta          | W   | 0.673      | 0.384        | -                | 0.794 (0.205)    | -         |     6.34 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           33 |     1914 | 2024-04-24 | Nexus             | W   | 0.639      | -            | -                | -                | -         |     3.81 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           32 |     1963 | 2024-04-21 | Gaimin Gladiators | L   | 0.620      | -            | -                | -                | -         |    -8.65 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           31 |     2042 | 2024-04-19 | ENCE              | W   | 0.606      | 0.384        | 0.212 (0.049)    | -                | -         |    15.85 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           30 |     2084 | 2024-04-18 | Apeks             | L   | 0.600      | -            | -                | -                | -         |   -11.39 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           29 |     2092 | 2024-04-18 | ex-Guild Eagles   | W   | 0.599      | -            | -                | -                | -         |     4.21 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           28 |     2166 | 2024-04-16 | B8                | W   | 0.585      | 0.384        | 0.246 (0.055)    | 1.000 (0.225)    | -         |     8.55 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           27 |     2218 | 2024-04-12 | Aurora            | L   | 0.561      | -            | -                | -                | -         |    -0.96 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           26 |     2254 | 2024-04-11 | BetBoom           | W   | 0.553      | 0.143        | 0.403 (0.032)    | -                | -         |    16.33 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           25 |     2287 | 2024-04-10 | Apeks             | W   | 0.548      | -            | -                | -                | -         |     7.64 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           24 |     2301 | 2024-04-10 | Enterprise        | L   | 0.545      | -            | -                | -                | -         |   -11.40 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           23 |     2511 | 2024-04-03 | Insilio           | W   | 0.501      | -            | -                | -                | -         |     5.08 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           22 |     2520 | 2024-04-03 | ex-Guild Eagles   | W   | 0.500      | -            | -                | -                | -         |     3.62 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           21 |     2530 | 2024-04-03 | Alliance          | W   | 0.499      | -            | -                | -                | -         |     4.27 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           20 |     2559 | 2024-04-02 | PARIVISION        | W   | 0.494      | -            | -                | -                | -         |     5.73 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           19 |     2564 | 2024-04-02 | ex-Guild Eagles   | L   | 0.493      | -            | -                | -                | -         |   -11.96 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           18 |     2572 | 2024-04-02 | ALTERNATE aTTaX   | W   | 0.492      | -            | -                | -                | -         |     6.32 | Forester, ICY, Krad, Sdaim, TRAVIS      |
|           17 |     2794 | 2024-03-18 | The MongolZ       | L   | 0.393      | -            | -                | -                | -         |    -0.10 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           16 |     2815 | 2024-03-17 | Apeks             | L   | 0.388      | -            | -                | -                | -         |    -7.04 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           15 |     2822 | 2024-03-17 | GamerLegion       | L   | 0.386      | -            | -                | -                | -         |    -8.72 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           14 |     3129 | 2024-03-05 | FORZE             | L   | 0.307      | -            | -                | -                | -         |    -6.40 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           13 |     3135 | 2024-03-05 | Zero Tenacity     | W   | 0.307      | -            | -                | -                | -         |     4.62 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           12 |     3230 | 2024-03-01 | BIG               | L   | 0.279      | -            | -                | -                | -         |    -1.61 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           11 |     3248 | 2024-02-28 | Young Ninjas      | L   | 0.267      | -            | -                | -                | -         |    -7.10 | Forester, ICY, Krad, NickelBack, TRAVIS |
|           10 |     3509 | 2024-02-17 | 9 Pandas          | W   | 0.193      | -            | -                | -                | 1 (0.193) |     2.93 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            9 |     3539 | 2024-02-16 | Falcons           | W   | 0.186      | -            | -                | -                | 1 (0.186) |     5.41 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            8 |     3563 | 2024-02-15 | fnatic            | L   | 0.179      | -            | -                | -                | -         |    -0.33 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            7 |     3596 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.174      | -            | -                | -                | 1 (0.174) |     0.43 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            6 |     3601 | 2024-02-14 | Enterprise        | L   | 0.173      | -            | -                | -                | -         |    -3.62 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            5 |     3656 | 2024-02-10 | Sashi             | L   | 0.147      | -            | -                | -                | -         |    -2.12 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            4 |     3669 | 2024-02-09 | Nemiga            | L   | 0.141      | -            | -                | -                | -         |    -1.27 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            3 |     3686 | 2024-02-08 | RUBY              | W   | 0.134      | -            | -                | -                | -         |     1.47 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            2 |     3691 | 2024-02-08 | Insilio           | W   | 0.133      | -            | -                | -                | -         |     1.18 | Forester, ICY, Krad, NickelBack, TRAVIS |
|            1 |     4112 | 2024-01-19 | Astralis          | W   | 0.001      | -            | -                | -                | -         |     0.03 | Forester, ICY, Krad, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,889.09)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.900 | $2,000.00      | $1,800.03       |
| 2024-05-23 |      0.834 | $12,500.00     | $10,421.96      |
| 2024-05-04 |      0.707 | $22,000.00     | $15,552.99      |
| 2024-05-02 |      0.694 | $1,500.00      | $1,040.77       |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
