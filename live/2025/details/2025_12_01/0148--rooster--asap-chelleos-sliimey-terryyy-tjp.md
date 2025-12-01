### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, sliimey, Terryyy, TjP<br />
Global Rank: [148](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  759.7<br />
<br />
Final Rank Value (759.7) = Starting Rank Value (712.5) + Head To Head Adjustments (47.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.5
- 400 + ( ( 0.164 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 712.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1284 | 2025-10-17 | SemperFi        | L   | 0.898      | -            | -                | -                | -         |   -10.20 | asap, chelleos, sliimey, Terryyy, TjP   |
|           28 |     1318 | 2025-10-16 | Mindfreak       | W   | 0.891      | 0.278        | 0.005 (0.001)    | 0.471 (0.117)    | 0 (0.000) |    15.09 | asap, chelleos, sliimey, Terryyy, TjP   |
|           27 |     1385 | 2025-10-14 | FURY            | W   | 0.878      | 0.278        | -                | 0.148 (0.036)    | 0 (0.000) |     5.74 | asap, chelleos, sliimey, Terryyy, TjP   |
|           26 |     1643 | 2025-10-07 | Ground Zero     | W   | 0.831      | 0.278        | 0.009 (0.002)    | 0.324 (0.075)    | 0 (0.000) |    12.24 | asap, chelleos, sliimey, Terryyy, TjP   |
|           25 |     1705 | 2025-10-06 | KZG             | W   | 0.825      | 0.278        | 0.000 (0.000)    | 0.140 (0.032)    | 0 (0.000) |     8.47 | asap, chelleos, sliimey, Terryyy, TjP   |
|           24 |     1767 | 2025-10-05 | Animus Victoria | L   | 0.818      | -            | -                | -                | -         |   -19.50 | asap, chelleos, sliimey, Terryyy, TjP   |
|           23 |     1960 | 2025-09-30 | M80             | L   | 0.785      | -            | -                | -                | -         |    -0.80 | asap, chelleos, sliimey, Terryyy, TjP   |
|           22 |     1995 | 2025-09-29 | 3DMAX           | L   | 0.778      | -            | -                | -                | -         |    -0.17 | asap, chelleos, sliimey, Terryyy, TjP   |
|           21 |     2035 | 2025-09-28 | G2              | L   | 0.771      | -            | -                | -                | -         |    -0.10 | asap, chelleos, sliimey, Terryyy, TjP   |
|           20 |     2307 | 2025-09-20 | SemperFi        | L   | 0.718      | -            | -                | -                | -         |   -10.07 | asap, chelleos, sliimey, Terryyy, TjP   |
|           19 |     2410 | 2025-09-17 | SemperFi        | W   | 0.698      | 0.278        | 0.018 (0.003)    | 0.398 (0.077)    | 0 (0.000) |    12.20 | asap, chelleos, sliimey, Terryyy, TjP   |
|           18 |     2598 | 2025-09-12 | SemperFi        | L   | 0.665      | -            | -                | -                | -         |    -8.97 | asap, chelleos, sliimey, Terryyy, TjP   |
|           17 |     2650 | 2025-09-11 | Underground     | W   | 0.658      | 0.314        | 0.001 (0.000)    | -                | 0 (0.000) |     6.89 | asap, chelleos, sliimey, Terryyy, TjP   |
|           16 |     2654 | 2025-09-11 | Ground Zero     | W   | 0.657      | 0.314        | 0.009 (0.002)    | 0.324 (0.067)    | 0 (0.000) |     9.26 | asap, chelleos, sliimey, Terryyy, TjP   |
|           15 |     2705 | 2025-09-10 | KZG             | W   | 0.651      | 0.314        | 0.000 (0.000)    | -                | 0 (0.000) |     7.02 | asap, chelleos, sliimey, Terryyy, TjP   |
|           14 |     2754 | 2025-09-09 | FURY            | W   | 0.645      | -            | -                | -                | 0 (0.000) |     4.65 | asap, chelleos, sliimey, Terryyy, TjP   |
|           13 |     2757 | 2025-09-09 | Underground     | L   | 0.645      | -            | -                | -                | -         |   -13.21 | asap, chelleos, sliimey, Terryyy, TjP   |
|           12 |     2798 | 2025-09-08 | Mindfreak       | W   | 0.638      | 0.278        | 0.005 (0.001)    | 0.471 (0.083)    | 0 (0.000) |    13.18 | asap, chelleos, sliimey, Terryyy, TjP   |
|           11 |     2858 | 2025-09-06 | FURY            | W   | 0.624      | 0.314        | -                | 0.148 (0.029)    | -         |     4.69 | asap, BRACE, chelleos, sliimey, Terryyy |
|           10 |     2999 | 2025-08-29 | SemperFi        | L   | 0.572      | -            | -                | -                | -         |    -8.03 | asap, chelleos, sliimey, Terryyy, TjP   |
|            9 |     3039 | 2025-08-28 | ex-TALON        | W   | 0.564      | -            | -                | -                | -         |     4.36 | asap, chelleos, sliimey, Terryyy, TjP   |
|            8 |     3064 | 2025-08-27 | Mindfreak       | W   | 0.558      | 0.278        | 0.005 (0.001)    | 0.471 (0.073)    | -         |    12.75 | asap, chelleos, sliimey, Terryyy, TjP   |
|            7 |     3456 | 2025-08-13 | Ground Zero     | W   | 0.465      | 0.278        | 0.009 (0.001)    | 0.324 (0.042)    | -         |     7.00 | asap, chelleos, sliimey, Terryyy, TjP   |
|            6 |     3504 | 2025-08-12 | ex-TALON        | L   | 0.458      | -            | -                | -                | -         |   -10.76 | asap, chelleos, sliimey, Terryyy, TjP   |
|            5 |     3560 | 2025-08-11 | DOG             | W   | 0.451      | -            | -                | -                | -         |     2.04 | asap, chelleos, sliimey, Terryyy, TjP   |
|            4 |     3981 | 2025-07-18 | SemperFi        | L   | 0.291      | -            | -                | -                | -         |    -4.15 | asap, chelleos, sliimey, Terryyy, TjP   |
|            3 |     4003 | 2025-07-16 | KZG             | W   | 0.283      | -            | -                | -                | -         |     3.29 | asap, chelleos, sliimey, Terryyy, TjP   |
|            2 |     4053 | 2025-07-15 | ex-TALON        | W   | 0.271      | -            | -                | -                | -         |     2.15 | asap, chelleos, sliimey, Terryyy, TjP   |
|            1 |     4110 | 2025-07-12 | Animus Victoria | W   | 0.252      | -            | -                | -                | -         |     2.12 | asap, chelleos, sliimey, Terryyy, TjP   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,465.18)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-17 |      0.898 | $1,000.00      | $898.46         |
| 2025-10-02 |      0.801 | $3,000.00      | $2,401.79       |
| 2025-09-20 |      0.718 | $1,000.00      | $718.08         |
| 2025-09-12 |      0.665 | $1,960.00      | $1,303.06       |
| 2025-08-29 |      0.572 | $1,000.00      | $571.68         |
| 2025-07-18 |      0.291 | $1,966.00      | $572.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
