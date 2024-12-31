### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, rigoN, syrsoN, tabseN<br />
Global Rank: [18](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [13]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1334.4<br />
<br />
Final Rank Value (1334.4) = Starting Rank Value (1412.9) + Head To Head Adjustments (-78.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.610[<sup>1</sup>](#table2)
- Bounty Collected: 0.436[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.884[<sup>2</sup>](#table1)

The average of these factors is 0.520<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1412.9
- 400 + ( ( 0.520 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1412.9


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
|           41 |      146 | 2024-12-14 | Arrow           | L   | 1.000      | -            | -                | -                | -         |   -29.77 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           40 |      304 | 2024-12-06 | paiN            | L   | 1.000      | -            | -                | -                | -         |   -12.61 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           39 |      328 | 2024-12-05 | G2              | L   | 1.000      | -            | -                | -                | -         |    -1.18 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           38 |      338 | 2024-12-04 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |    -5.24 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           37 |      380 | 2024-12-02 | Complexity      | W   | 1.000      | -            | -                | -                | 1 (1.000) |    15.66 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           36 |      401 | 2024-12-01 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -7.69 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           35 |      420 | 2024-11-30 | Virtus.pro      | W   | 1.000      | 0.143        | 0.168 (0.024)    | -                | 1 (1.000) |    14.00 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           34 |      447 | 2024-11-30 | FlyQuest        | L   | 1.000      | -            | -                | -                | -         |   -16.44 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           33 |      452 | 2024-11-29 | Passion UA      | W   | 1.000      | 0.143        | -                | 0.972 (0.139)    | 1 (1.000) |     7.06 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           32 |      602 | 2024-11-22 | Passion UA      | W   | 0.950      | 0.143        | -                | 0.972 (0.132)    | 1 (0.950) |     6.49 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           31 |      613 | 2024-11-21 | HEROIC          | W   | 0.945      | 0.143        | 0.776 (0.105)    | -                | 1 (0.945) |    25.67 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           30 |      625 | 2024-11-21 | Sashi           | W   | 0.944      | -            | -                | -                | 1 (0.944) |     4.43 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           29 |      879 | 2024-11-11 | GUN5            | L   | 0.878      | -            | -                | -                | -         |   -21.44 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           28 |     1036 | 2024-11-02 | ALTERNATE aTTaX | W   | 0.820      | -            | -                | -                | -         |     2.95 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           27 |     1192 | 2024-10-26 | OG              | L   | 0.772      | -            | -                | -                | -         |   -21.54 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           26 |     1219 | 2024-10-24 | BESTIA          | W   | 0.760      | 0.477        | 0.102 (0.037)    | 0.564 (0.205)    | -         |     4.92 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           25 |     1228 | 2024-10-24 | Aurora          | W   | 0.758      | 0.477        | -                | 0.330 (0.119)    | -         |     2.34 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           24 |     1581 | 2024-10-06 | FlyQuest        | L   | 0.641      | -            | -                | -                | -         |   -11.11 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           23 |     1587 | 2024-10-06 | SAW             | W   | 0.640      | 0.500        | 0.260 (0.083)    | 0.532 (0.170)    | 1 (0.640) |    11.37 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           22 |     1652 | 2024-10-04 | M80             | W   | 0.628      | 0.500        | 0.141 (0.044)    | 0.501 (0.157)    | 1 (0.628) |     6.18 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           21 |     1660 | 2024-10-04 | ODDIK           | W   | 0.626      | 0.500        | 0.093 (0.029)    | 0.451 (0.141)    | 1 (0.626) |     2.05 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           20 |     2019 | 2024-09-25 | ECSTATIC        | L   | 0.566      | -            | -                | -                | -         |   -15.81 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           19 |     2074 | 2024-09-24 | Monte           | L   | 0.558      | -            | -                | -                | -         |   -15.10 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           18 |     2283 | 2024-09-17 | The MongolZ     | L   | 0.512      | -            | -                | -                | -         |    -1.14 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           17 |     2391 | 2024-09-13 | Complexity      | W   | 0.486      | 0.889        | 0.126 (0.054)    | 0.330 (0.143)    | 1 (0.486) |     7.67 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           16 |     2421 | 2024-09-12 | fnatic          | W   | 0.480      | 0.889        | 0.189 (0.081)    | 0.363 (0.155)    | -         |     3.67 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           15 |     2461 | 2024-09-11 | Rooster         | W   | 0.472      | -            | -                | -                | -         |     0.31 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           14 |     2487 | 2024-09-10 | Imperial        | L   | 0.466      | -            | -                | -                | -         |   -11.00 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           13 |     3012 | 2024-08-26 | ALTERNATE aTTaX | L   | 0.365      | -            | -                | -                | -         |    -9.76 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           12 |     3065 | 2024-08-24 | Virtus.pro      | L   | 0.354      | -            | -                | -                | -         |    -6.36 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           11 |     3086 | 2024-08-23 | GamerLegion     | W   | 0.347      | 0.535        | 0.181 (0.034)    | 0.654 (0.121)    | -         |     4.91 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           10 |     3098 | 2024-08-23 | los kogutos     | W   | 0.346      | -            | -                | -                | -         |     2.18 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            9 |     3138 | 2024-08-22 | Qiang           | W   | 0.338      | -            | -                | -                | -         |     0.17 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            8 |     3164 | 2024-08-21 | Insilio         | W   | 0.333      | -            | -                | -                | -         |     0.38 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            7 |     3218 | 2024-08-21 | Passion UA      | L   | 0.331      | -            | -                | -                | -         |    -7.73 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            6 |     3541 | 2024-08-09 | Falcons         | L   | 0.253      | -            | -                | -                | -         |    -7.10 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            5 |     3573 | 2024-08-08 | SAW             | L   | 0.245      | -            | -                | -                | -         |    -4.02 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            4 |     3626 | 2024-08-07 | FlyQuest        | W   | 0.238      | -            | -                | -                | -         |     2.73 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            3 |     3780 | 2024-08-02 | Natus Vincere   | L   | 0.207      | -            | -                | -                | -         |    -0.72 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            2 |     3816 | 2024-08-01 | Virtus.pro      | W   | 0.201      | 0.581        | 0.168 (0.020)    | -                | -         |     2.75 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            1 |     3878 | 2024-07-31 | Natus Vincere   | L   | 0.193      | -            | -                | -                | -         |    -0.65 | JDC, Krimbo, rigoN, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68,721.38)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-12-14 |      1.000 | $3,668.00      | $3,668.00       |
| 2024-11-12 |      0.886 | $1,000.00      | $886.06         |
| 2024-10-26 |      0.774 | $20,000.00     | $15,486.72      |
| 2024-10-06 |      0.641 | $20,000.00     | $12,827.53      |
| 2024-09-26 |      0.573 | $1,000.00      | $572.96         |
| 2024-09-22 |      0.547 | $17,500.00     | $9,573.01       |
| 2024-08-25 |      0.360 | $7,500.00      | $2,701.70       |
| 2024-08-09 |      0.254 | $4,500.00      | $1,142.27       |
| 2024-08-04 |      0.219 | $8,500.00      | $1,863.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
