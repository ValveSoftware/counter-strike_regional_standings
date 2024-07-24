### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1602.4<br />
<br />
Final Rank Value (1602.4) = Starting Rank Value (1691.2) + Head To Head Adjustments (-88.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.718[<sup>1</sup>](#table2)
- Bounty Collected: 0.620[<sup>2</sup>](#table1)
- Opponent Network: 0.252[<sup>2</sup>](#table1)
- LAN Wins: 0.962[<sup>2</sup>](#table1)

The average of these factors is 0.638<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1691.2
- 400 + ( ( 0.638 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1691.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      228 | 2024-07-18 | M80           | L   | 1.000      | -            | -                | -                | -         |   -26.88 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      277 | 2024-07-17 | Virtus.pro    | L   | 1.000      | -            | -                | -                | -         |   -11.53 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      610 | 2024-06-16 | Falcons       | W   | 0.946      | 0.500        | 0.276 (0.130)    | -                | 1 (0.946) |     7.87 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      619 | 2024-06-16 | Aurora        | W   | 0.944      | 0.500        | 0.423 (0.200)    | 0.783 (0.370)    | 1 (0.944) |     5.46 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      649 | 2024-06-15 | MIBR          | W   | 0.939      | 0.500        | 0.257 (0.121)    | 0.561 (0.263)    | 1 (0.939) |     7.47 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      684 | 2024-06-14 | ENCE          | L   | 0.933      | -            | -                | -                | -         |   -24.96 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      694 | 2024-06-14 | Alliance      | W   | 0.931      | 0.500        | -                | 0.328 (0.153)    | 1 (0.931) |     0.39 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     1018 | 2024-06-06 | FURIA         | L   | 0.880      | -            | -                | -                | -         |   -14.65 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     1037 | 2024-06-06 | BetBoom       | L   | 0.878      | -            | -                | -                | -         |   -22.11 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1048 | 2024-06-06 | fnatic        | L   | 0.878      | -            | -                | -                | -         |   -21.61 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1087 | 2024-06-05 | BIG           | W   | 0.872      | 0.715        | 0.173 (0.108)    | 0.347 (0.216)    | 1 (0.872) |     3.15 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1101 | 2024-06-05 | Eternal Fire  | W   | 0.871      | 0.715        | 0.833 (0.519)    | 0.443 (0.276)    | 1 (0.871) |    12.44 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1322 | 2024-05-27 | MOUZ          | L   | 0.816      | -            | -                | -                | -         |    -4.90 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1334 | 2024-05-27 | Liquid        | L   | 0.814      | -            | -                | -                | -         |   -19.32 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     1825 | 2024-05-11 | MOUZ          | L   | 0.707      | -            | -                | -                | -         |    -4.98 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     1879 | 2024-05-09 | Virtus.pro    | W   | 0.693      | 0.889        | 0.595 (0.366)    | 0.374 (0.230)    | 1 (0.693) |    12.57 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     1946 | 2024-05-05 | Natus Vincere | W   | 0.667      | 0.889        | 1.000 (0.593)    | 0.364 (0.216)    | 1 (0.667) |    17.73 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2012 | 2024-05-02 | HEROIC        | W   | 0.646      | 0.889        | 0.272 (0.156)    | 0.404 (0.232)    | 1 (0.646) |     8.55 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2061 | 2024-04-30 | PERA          | W   | 0.633      | 0.889        | -                | 0.462 (0.260)    | 1 (0.633) |     0.28 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2984 | 2024-03-24 | FaZe          | L   | 0.385      | -            | -                | -                | -         |    -4.48 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2993 | 2024-03-23 | Vitality      | L   | 0.380      | -            | -                | -                | -         |    -3.10 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3008 | 2024-03-22 | MOUZ          | L   | 0.372      | -            | -                | -                | -         |    -2.47 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3026 | 2024-03-21 | HEROIC        | W   | 0.367      | 1.000        | 0.272 (0.100)    | -                | -         |     4.83 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3035 | 2024-03-21 | paiN          | W   | 0.366      | 1.000        | 0.393 (0.144)    | 0.825 (0.302)    | -         |     2.83 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3348 | 2024-03-07 | OG            | L   | 0.274      | -            | -                | -                | -         |    -8.41 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3440 | 2024-03-04 | Liquid        | W   | 0.255      | -            | -                | -                | -         |     1.63 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3455 | 2024-03-03 | FURIA         | L   | 0.248      | -            | -                | -                | -         |    -2.77 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3494 | 2024-03-02 | BOSS          | W   | 0.239      | -            | -                | -                | -         |     0.07 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3513 | 2024-03-01 | Elevate       | W   | 0.234      | -            | -                | -                | -         |     0.19 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4000 | 2024-02-05 | Falcons       | L   | 0.067      | -            | -                | -                | -         |    -1.70 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4021 | 2024-02-04 | Spirit        | L   | 0.060      | -            | -                | -                | -         |    -0.42 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4041 | 2024-02-03 | Apeks         | W   | 0.054      | -            | -                | -                | -         |     0.03 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($111,846.73)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      0.946 | $50,000.00     | $47,291.97      |
| 2024-06-09 |      0.900 | $8,000.00      | $7,197.97       |
| 2024-06-02 |      0.854 | $4,000.00      | $3,416.67       |
| 2024-05-12 |      0.713 | $45,000.00     | $32,085.90      |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |
| 2024-03-10 |      0.294 | $5,000.00      | $1,470.78       |
| 2024-02-11 |      0.107 | $16,000.00     | $1,707.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
