### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [43](../standings_global.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
Final Rank Value:  1108.8<br />
<br />
Final Rank Value (1108.8) = Starting Rank Value (1115.1) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.472[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.234[<sup>2</sup>](#table1)
- LAN Wins: 0.268[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1115.1
- 400 + ( ( 0.353 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1115.1


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
|           46 |      199 | 2024-07-18 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -20.01 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |      340 | 2024-07-16 | Insilio         | W   | 1.000      | 0.500        | 0.030 (0.015)    | 0.582 (0.291)    | 0 (0.000) |     9.94 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |      607 | 2024-06-16 | 9z              | L   | 0.946      | -            | -                | -                | -         |    -3.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |      659 | 2024-06-14 | RED Canids      | W   | 0.936      | 0.548        | 0.102 (0.052)    | 0.793 (0.407)    | 1 (0.936) |    18.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      662 | 2024-06-14 | Imperial        | W   | 0.935      | 0.548        | 0.317 (0.163)    | 0.653 (0.335)    | 1 (0.935) |    23.76 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |      819 | 2024-06-09 | Sangal          | L   | 0.900      | -            | -                | -                | -         |   -10.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |     1013 | 2024-06-06 | SINNERS         | W   | 0.880      | 0.500        | 0.048 (0.021)    | 0.769 (0.338)    | 0 (0.000) |    10.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |     1075 | 2024-06-05 | 3DMAX           | W   | 0.873      | 0.500        | 0.175 (0.077)    | 1.000 (0.437)    | 0 (0.000) |    18.78 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1207 | 2024-06-01 | ENCE            | L   | 0.846      | -            | -                | -                | -         |    -5.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1215 | 2024-06-01 | Zero Tenacity   | L   | 0.845      | -            | -                | -                | -         |   -11.82 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     1882 | 2024-05-09 | B8              | L   | 0.691      | -            | -                | -                | -         |   -11.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     2044 | 2024-05-01 | Zero Tenacity   | L   | 0.639      | -            | -                | -                | -         |   -11.29 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     2364 | 2024-04-18 | ex-Guild Eagles | L   | 0.553      | -            | -                | -                | -         |   -13.94 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     2373 | 2024-04-18 | fnatic          | W   | 0.553      | 0.143        | 0.428 (0.034)    | 0.666 (0.053)    | 0 (0.000) |    16.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     2443 | 2024-04-16 | BLEED           | L   | 0.541      | -            | -                | -                | -         |   -10.01 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     2576 | 2024-04-10 | RUSH B          | W   | 0.500      | 0.500        | -                | 0.306 (0.077)    | 0 (0.000) |     3.08 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     2630 | 2024-04-09 | Aurora          | W   | 0.494      | 0.500        | 0.423 (0.104)    | 0.783 (0.193)    | -         |    14.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2636 | 2024-04-09 | Apeks           | L   | 0.493      | -            | -                | -                | -         |   -10.58 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2664 | 2024-04-08 | GUN5            | W   | 0.486      | -            | -                | -                | -         |     0.29 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2669 | 2024-04-08 | fnatic          | L   | 0.486      | -            | -                | -                | -         |    -1.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2770 | 2024-04-04 | NOM             | W   | 0.459      | -            | -                | -                | -         |     0.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2804 | 2024-04-03 | 9INE            | W   | 0.454      | -            | -                | -                | -         |     0.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2841 | 2024-04-02 | TSM             | W   | 0.447      | -            | -                | -                | -         |     1.35 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2907 | 2024-03-28 | EYEBALLERS      | L   | 0.413      | -            | -                | -                | -         |    -9.94 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     3079 | 2024-03-18 | FURIA           | L   | 0.347      | -            | -                | -                | -         |    -0.26 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     3096 | 2024-03-17 | ENCE            | L   | 0.341      | -            | -                | -                | -         |    -1.75 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     3111 | 2024-03-17 | SAW             | L   | 0.339      | -            | -                | -                | -         |    -3.98 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     3202 | 2024-03-13 | Sangal          | W   | 0.314      | 0.500        | 0.195 (0.031)    | 0.860 (0.135)    | -         |     4.59 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     3257 | 2024-03-11 | B8              | L   | 0.301      | -            | -                | -                | -         |    -4.99 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3263 | 2024-03-11 | Apeks           | L   | 0.300      | -            | -                | -                | -         |    -6.63 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3375 | 2024-03-06 | 9 Pandas        | W   | 0.268      | 0.500        | 0.105 (0.014)    | 0.578 (0.077)    | -         |     3.35 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3412 | 2024-03-05 | FORZE           | W   | 0.261      | -            | -                | -                | -         |     2.34 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3418 | 2024-03-05 | Nemiga          | W   | 0.260      | 0.143        | 0.415 (0.015)    | -                | -         |     5.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3427 | 2024-03-05 | ex-Sprout       | W   | 0.260      | -            | -                | -                | -         |     0.31 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3468 | 2024-03-03 | The Chosen Few  | L   | 0.246      | -            | -                | -                | -         |    -7.16 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3520 | 2024-02-29 | Aurora          | L   | 0.227      | -            | -                | -                | -         |    -0.46 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3526 | 2024-02-29 | HAVU            | W   | 0.226      | -            | -                | -                | -         |     0.70 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     3534 | 2024-02-28 | FORZE           | L   | 0.221      | -            | -                | -                | -         |    -5.18 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     3538 | 2024-02-28 | kONO            | W   | 0.220      | -            | -                | -                | -         |     1.13 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     3828 | 2024-02-16 | fnatic          | W   | 0.138      | -            | -                | -                | 1 (0.138) |     4.09 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     3855 | 2024-02-15 | 9 Pandas        | W   | 0.131      | -            | -                | -                | 1 (0.131) |     1.65 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     3881 | 2024-02-14 | 3DMAX           | W   | 0.127      | -            | -                | -                | 1 (0.127) |     2.64 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     3894 | 2024-02-14 | Natus Vincere   | L   | 0.125      | -            | -                | -                | -         |    -0.03 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4052 | 2024-02-03 | SAW             | L   | 0.053      | -            | -                | -                | -         |    -0.67 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4082 | 2024-02-02 | Rhyno           | W   | 0.046      | -            | -                | -                | -         |     0.50 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4088 | 2024-02-02 | ABT             | W   | 0.045      | -            | -                | -                | -         |     0.04 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,045.51)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $7,000.00      | $6,639.86       |
| 2024-06-09 |      0.900 | $12,000.00     | $10,804.56      |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
