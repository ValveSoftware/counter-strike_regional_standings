### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, fostar, Kaide, mo0N, sowalio<br />
Global Rank: [87](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
<br />
Final Rank Value:  912.8<br />
<br />
Final Rank Value (912.8) = Starting Rank Value (940.3) + Head To Head Adjustments (-27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.496[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 940.3
- 400 + ( ( 0.262 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 940.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      209 | 2024-07-25 | 9z              | L   | 1.000      | -            | -                | -                | -         |    -1.22 | dekz, fostar, Kaide, mo0N, sowalio |
|           46 |      290 | 2024-07-23 | Metizport       | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.427 (0.186)    | 0 (0.000) |    17.44 | dekz, fostar, Kaide, mo0N, sowalio |
|           45 |      384 | 2024-07-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |    -9.11 | dekz, fostar, Kaide, mo0N, sowalio |
|           44 |      542 | 2024-07-17 | VP.Prodigy      | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.406 (0.176)    | 0 (0.000) |    14.56 | dekz, fostar, Kaide, mo0N, sowalio |
|           43 |      586 | 2024-07-16 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -15.44 | dekz, fostar, Kaide, mo0N, sowalio |
|           42 |      853 | 2024-06-16 | ARCRED          | W   | 0.899      | 0.450        | 0.039 (0.016)    | 0.328 (0.133)    | 0 (0.000) |    16.30 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           41 |      875 | 2024-06-15 | System5         | L   | 0.893      | -            | -                | -                | -         |   -21.69 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           40 |      887 | 2024-06-15 | Spirit Academy  | W   | 0.892      | 0.450        | 0.014 (0.005)    | -                | 0 (0.000) |     8.27 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           39 |      919 | 2024-06-14 | Zero Tenacity   | L   | 0.886      | -            | -                | -                | -         |    -7.47 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           38 |      927 | 2024-06-14 | LEON            | W   | 0.885      | -            | -                | -                | 0 (0.000) |     6.53 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           37 |     1070 | 2024-06-09 | Insilio         | L   | 0.852      | -            | -                | -                | -         |   -10.98 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           36 |     1215 | 2024-06-07 | SINNERS         | L   | 0.838      | -            | -                | -                | -         |   -10.98 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           35 |     1324 | 2024-06-05 | ARCRED          | L   | 0.825      | -            | -                | -                | -         |   -13.73 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           34 |     1342 | 2024-06-05 | Rare Atom       | L   | 0.824      | -            | -                | -                | -         |   -21.97 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           33 |     1393 | 2024-06-03 | Insilio         | W   | 0.813      | 0.372        | 0.023 (0.007)    | 0.554 (0.168)    | 0 (0.000) |    12.72 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           32 |     1402 | 2024-06-03 | HAVU            | L   | 0.812      | -            | -                | -                | -         |   -20.13 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           31 |     1438 | 2024-06-01 | Zero Tenacity   | W   | 0.800      | 0.372        | 0.139 (0.041)    | 1.000 (0.298)    | 0 (0.000) |    18.18 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           30 |     1502 | 2024-05-30 | Portugal        | W   | 0.786      | -            | -                | -                | 0 (0.000) |     4.74 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           29 |     1512 | 2024-05-30 | FURIA           | L   | 0.785      | -            | -                | -                | -         |    -0.59 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           28 |     1556 | 2024-05-28 | MOUZ NXT        | L   | 0.772      | -            | -                | -                | -         |    -8.27 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           27 |     1596 | 2024-05-26 | Zero Tenacity   | L   | 0.758      | -            | -                | -                | -         |    -7.01 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           26 |     1607 | 2024-05-25 | B8              | L   | 0.753      | -            | -                | -                | -         |    -5.33 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           25 |     1647 | 2024-05-23 | Nexus           | W   | 0.739      | 0.435        | 0.014 (0.004)    | 0.465 (0.149)    | 0 (0.000) |     6.63 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           24 |     1737 | 2024-05-21 | Endpoint        | W   | 0.724      | 0.435        | -                | 0.523 (0.165)    | 0 (0.000) |    10.59 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           23 |     2076 | 2024-05-11 | 9 Pandas        | L   | 0.659      | -            | -                | -                | -         |    -8.48 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           22 |     2102 | 2024-05-10 | Nemiga          | W   | 0.651      | 0.435        | 0.325 (0.092)    | 0.698 (0.197)    | -         |    15.89 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           21 |     2159 | 2024-05-07 | Insilio         | W   | 0.632      | 0.435        | 0.023 (0.006)    | 0.554 (0.152)    | -         |    10.00 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           20 |     2202 | 2024-05-05 | HAVU            | W   | 0.618      | -            | -                | -                | -         |     4.34 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           19 |     2234 | 2024-05-03 | V1dar           | W   | 0.605      | -            | -                | -                | -         |     1.92 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           18 |     2289 | 2024-05-01 | GL Academy      | L   | 0.591      | -            | -                | -                | -         |   -13.55 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           17 |     2331 | 2024-04-29 | Permitta        | L   | 0.577      | -            | -                | -                | -         |    -9.28 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           16 |     2362 | 2024-04-27 | Astralis Talent | W   | 0.566      | -            | -                | -                | -         |     0.79 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           15 |     2524 | 2024-04-20 | Zero Tenacity   | L   | 0.518      | -            | -                | -                | -         |    -5.62 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           14 |     2604 | 2024-04-18 | Sashi           | L   | 0.506      | -            | -                | -                | -         |    -4.45 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           13 |     2613 | 2024-04-18 | Aurora          | W   | 0.506      | 0.143        | 0.433 (0.031)    | -                | -         |    15.62 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           12 |     2620 | 2024-04-18 | NOM             | W   | 0.505      | -            | -                | -                | -         |     1.65 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           11 |     2667 | 2024-04-17 | JANO            | W   | 0.497      | -            | -                | -                | -         |     3.04 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           10 |     3311 | 2024-03-19 | Sashi           | L   | 0.307      | -            | -                | -                | -         |    -2.40 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            9 |     3368 | 2024-03-16 | Permitta        | W   | 0.286      | 0.372        | -                | 0.799 (0.085)    | -         |     4.69 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            8 |     3504 | 2024-03-11 | Nexus           | L   | 0.253      | -            | -                | -                | -         |    -5.07 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            7 |     3540 | 2024-03-09 | Spirit Academy  | W   | 0.240      | -            | -                | -                | -         |     0.81 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            6 |     3567 | 2024-03-08 | ARCRED          | W   | 0.233      | -            | -                | -                | -         |     2.89 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            5 |     3797 | 2024-02-27 | Spirit Academy  | L   | 0.166      | -            | -                | -                | -         |    -4.72 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            4 |     3801 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.166      | -            | -                | -                | -         |     3.02 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            3 |     4202 | 2024-02-09 | FORZE           | L   | 0.046      | -            | -                | -                | -         |    -0.80 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            2 |     4216 | 2024-02-08 | AMKAL           | L   | 0.040      | -            | -                | -                | -         |    -0.29 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            1 |     4218 | 2024-02-08 | ex-Guild Eagles | W   | 0.039      | -            | -                | -                | -         |     0.42 | dekz, Kaide, mo0N, sowalio, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,818.97)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $30,000.00     | $26,956.22      |
| 2024-06-10 |      0.860 | $3,300.00      | $2,838.46       |
| 2024-05-12 |      0.666 | $2,000.00      | $1,332.34       |
| 2024-03-25 |      0.346 | $2,000.00      | $691.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
