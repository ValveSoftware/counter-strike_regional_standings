### Roster Details<br />
Team Name: BIG<br />
Roster: hyped, JDC, Krimbo, kyuubii, tabseN<br />
Global Rank: [16](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1344.0<br />
<br />
Final Rank Value (1344.0) = Starting Rank Value (1399.0) + Head To Head Adjustments (-55.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.629[<sup>1</sup>](#table2)
- Bounty Collected: 0.426[<sup>2</sup>](#table1)
- Opponent Network: 0.108[<sup>2</sup>](#table1)
- LAN Wins: 0.853[<sup>2</sup>](#table1)

The average of these factors is 0.504<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1399.0
- 400 + ( ( 0.504 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1399.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       20 | 2025-01-15 | SAW             | W   | 1.000      | 0.143        | 0.259 (0.037)    | -                | -         |    14.52 | hyped, JDC, Krimbo, kyuubii, tabseN |
|           41 |      229 | 2024-12-14 | Arrow           | L   | 0.979      | -            | -                | -                | -         |   -28.94 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           40 |      387 | 2024-12-06 | paiN            | L   | 0.923      | -            | -                | -                | -         |   -11.82 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           39 |      411 | 2024-12-05 | G2              | L   | 0.917      | -            | -                | -                | -         |    -1.06 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           38 |      421 | 2024-12-04 | Falcons         | L   | 0.915      | -            | -                | -                | -         |    -3.88 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           37 |      463 | 2024-12-02 | Complexity      | W   | 0.902      | -            | -                | -                | 1 (0.902) |    12.99 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           36 |      484 | 2024-12-01 | FURIA           | L   | 0.895      | -            | -                | -                | -         |    -6.99 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           35 |      503 | 2024-11-30 | Virtus.pro      | W   | 0.888      | -            | -                | -                | 1 (0.888) |    11.06 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           34 |      530 | 2024-11-30 | FlyQuest        | L   | 0.883      | -            | -                | -                | -         |   -15.02 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           33 |      535 | 2024-11-29 | Passion UA      | W   | 0.882      | 0.143        | -                | 0.833 (0.105)    | 1 (0.882) |     6.22 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           32 |      685 | 2024-11-22 | Passion UA      | W   | 0.829      | 0.143        | -                | 0.833 (0.099)    | 1 (0.829) |     5.70 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           31 |      696 | 2024-11-21 | Falcons         | W   | 0.824      | 0.143        | 0.874 (0.103)    | -                | 1 (0.824) |    23.04 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           30 |      708 | 2024-11-21 | Sashi           | W   | 0.822      | -            | -                | -                | 1 (0.822) |     3.58 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           29 |      962 | 2024-11-11 | GUN5            | L   | 0.757      | -            | -                | -                | -         |   -18.48 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           28 |     1119 | 2024-11-02 | ALTERNATE aTTaX | W   | 0.699      | -            | -                | -                | -         |     2.77 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           27 |     1275 | 2024-10-26 | OG              | L   | 0.650      | -            | -                | -                | -         |   -18.42 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           26 |     1302 | 2024-10-24 | BESTIA          | W   | 0.639      | 0.477        | 0.156 (0.047)    | 0.622 (0.190)    | -         |     4.17 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           25 |     1311 | 2024-10-24 | Aurora          | W   | 0.637      | 0.477        | 0.058 (0.018)    | 0.313 (0.095)    | -         |     1.86 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           24 |     1664 | 2024-10-06 | FlyQuest        | L   | 0.520      | -            | -                | -                | -         |    -9.20 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           23 |     1670 | 2024-10-06 | SAW             | W   | 0.519      | 0.500        | 0.259 (0.067)    | 0.441 (0.115)    | 1 (0.519) |     7.91 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           22 |     1735 | 2024-10-04 | M80             | W   | 0.506      | 0.500        | 0.141 (0.036)    | 0.439 (0.111)    | 1 (0.506) |     4.46 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           21 |     1743 | 2024-10-04 | ODDIK           | W   | 0.505      | 0.500        | 0.088 (0.022)    | 0.401 (0.101)    | 1 (0.505) |     1.36 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           20 |     2102 | 2024-09-25 | ECSTATIC        | L   | 0.445      | -            | -                | -                | -         |   -12.46 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           19 |     2157 | 2024-09-24 | Monte           | L   | 0.437      | -            | -                | -                | -         |   -11.96 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           18 |     2366 | 2024-09-17 | The MongolZ     | L   | 0.391      | -            | -                | -                | -         |    -0.80 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           17 |     2474 | 2024-09-13 | Complexity      | W   | 0.365      | 0.889        | 0.122 (0.040)    | 0.293 (0.095)    | 1 (0.365) |     5.11 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           16 |     2504 | 2024-09-12 | fnatic          | W   | 0.359      | 0.889        | 0.183 (0.058)    | 0.300 (0.096)    | -         |     2.46 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           15 |     2544 | 2024-09-11 | Rooster         | W   | 0.351      | -            | -                | -                | -         |     0.23 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           14 |     2570 | 2024-09-10 | Imperial        | L   | 0.345      | -            | -                | -                | -         |    -8.38 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           13 |     3095 | 2024-08-26 | ALTERNATE aTTaX | L   | 0.244      | -            | -                | -                | -         |    -6.41 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           12 |     3148 | 2024-08-24 | Virtus.pro      | L   | 0.233      | -            | -                | -                | -         |    -4.63 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           11 |     3169 | 2024-08-23 | GamerLegion     | W   | 0.226      | 0.535        | 0.200 (0.024)    | 0.604 (0.073)    | -         |     3.44 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           10 |     3181 | 2024-08-23 | los kogutos     | W   | 0.224      | -            | -                | -                | -         |     1.62 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            9 |     3221 | 2024-08-22 | Qiang           | W   | 0.216      | -            | -                | -                | -         |     0.06 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            8 |     3247 | 2024-08-21 | Insilio         | W   | 0.212      | -            | -                | -                | -         |     0.22 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            7 |     3301 | 2024-08-21 | Passion UA      | L   | 0.209      | -            | -                | -                | -         |    -4.97 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            6 |     3624 | 2024-08-09 | Falcons         | L   | 0.132      | -            | -                | -                | -         |    -3.80 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            5 |     3656 | 2024-08-08 | SAW             | L   | 0.124      | -            | -                | -                | -         |    -2.28 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            4 |     3709 | 2024-08-07 | FlyQuest        | W   | 0.117      | -            | -                | -                | -         |     1.38 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            3 |     3863 | 2024-08-02 | Natus Vincere   | L   | 0.085      | -            | -                | -                | -         |    -0.33 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            2 |     3899 | 2024-08-01 | Virtus.pro      | W   | 0.080      | -            | -                | -                | -         |     0.93 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            1 |     3961 | 2024-07-31 | Natus Vincere   | L   | 0.072      | -            | -                | -                | -         |    -0.27 | JDC, Krimbo, rigoN, syrsoN, tabseN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,618.22)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.984 | $20,000.00     | $19,670.26      |
| 2024-12-14 |      0.979 | $3,668.00      | $3,589.98       |
| 2024-11-12 |      0.765 | $1,000.00      | $764.87         |
| 2024-10-26 |      0.653 | $20,000.00     | $13,062.87      |
| 2024-10-06 |      0.520 | $20,000.00     | $10,403.68      |
| 2024-09-26 |      0.452 | $1,000.00      | $451.77         |
| 2024-09-22 |      0.426 | $17,500.00     | $7,452.14       |
| 2024-08-25 |      0.239 | $7,500.00      | $1,792.75       |
| 2024-08-09 |      0.133 | $4,500.00      | $596.90         |
| 2024-08-04 |      0.098 | $8,500.00      | $832.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
