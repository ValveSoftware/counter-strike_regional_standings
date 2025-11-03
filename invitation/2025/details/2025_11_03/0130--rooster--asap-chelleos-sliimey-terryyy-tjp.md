### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, sliimey, Terryyy, TjP<br />
Global Rank: [130](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  739.8<br />
<br />
Final Rank Value (739.8) = Starting Rank Value (706.9) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.9
- 400 + ( ( 0.164 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 706.9


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
|           29 |      273 | 2025-10-17 | SemperFi        | L   | 1.000      | -            | -                | -                | -         |   -10.93 | asap, chelleos, sliimey, Terryyy, TjP   |
|           28 |      305 | 2025-10-16 | Mindfreak       | W   | 1.000      | 0.278        | 0.001 (0.000)    | 0.294 (0.082)    | 0 (0.000) |     9.40 | asap, chelleos, sliimey, Terryyy, TjP   |
|           27 |      370 | 2025-10-14 | FURY            | W   | 1.000      | 0.278        | -                | 0.161 (0.045)    | 0 (0.000) |     6.93 | asap, chelleos, sliimey, Terryyy, TjP   |
|           26 |      622 | 2025-10-07 | Ground Zero     | W   | 1.000      | 0.278        | 0.003 (0.001)    | 0.213 (0.059)    | 0 (0.000) |    12.95 | asap, chelleos, sliimey, Terryyy, TjP   |
|           25 |      684 | 2025-10-06 | KZG             | W   | 1.000      | 0.278        | 0.001 (0.000)    | 0.200 (0.056)    | 0 (0.000) |     9.66 | asap, chelleos, sliimey, Terryyy, TjP   |
|           24 |      746 | 2025-10-05 | Animus Victoria | L   | 1.000      | -            | -                | -                | -         |   -23.80 | asap, chelleos, sliimey, Terryyy, TjP   |
|           23 |      939 | 2025-09-30 | M80             | L   | 0.971      | -            | -                | -                | -         |    -1.83 | asap, chelleos, sliimey, Terryyy, TjP   |
|           22 |      974 | 2025-09-29 | 3DMAX           | L   | 0.965      | -            | -                | -                | -         |    -0.13 | asap, chelleos, sliimey, Terryyy, TjP   |
|           21 |     1014 | 2025-09-28 | G2              | L   | 0.958      | -            | -                | -                | -         |    -0.07 | asap, chelleos, sliimey, Terryyy, TjP   |
|           20 |     1286 | 2025-09-20 | SemperFi        | L   | 0.905      | -            | -                | -                | -         |   -12.32 | asap, chelleos, sliimey, Terryyy, TjP   |
|           19 |     1389 | 2025-09-17 | SemperFi        | W   | 0.885      | 0.278        | 0.018 (0.004)    | 0.460 (0.113)    | 0 (0.000) |    15.72 | asap, chelleos, sliimey, Terryyy, TjP   |
|           18 |     1577 | 2025-09-12 | SemperFi        | L   | 0.851      | -            | -                | -                | -         |   -10.93 | asap, chelleos, sliimey, Terryyy, TjP   |
|           17 |     1629 | 2025-09-11 | Underground     | W   | 0.845      | 0.314        | 0.001 (0.000)    | -                | 0 (0.000) |     8.95 | asap, chelleos, sliimey, Terryyy, TjP   |
|           16 |     1633 | 2025-09-11 | Ground Zero     | W   | 0.844      | 0.314        | 0.003 (0.001)    | 0.213 (0.056)    | 0 (0.000) |    10.27 | asap, chelleos, sliimey, Terryyy, TjP   |
|           15 |     1684 | 2025-09-10 | KZG             | W   | 0.837      | 0.314        | 0.001 (0.000)    | 0.200 (0.053)    | 0 (0.000) |     8.85 | asap, chelleos, sliimey, Terryyy, TjP   |
|           14 |     1733 | 2025-09-09 | FURY            | W   | 0.832      | -            | -                | -                | 0 (0.000) |     6.63 | asap, chelleos, sliimey, Terryyy, TjP   |
|           13 |     1736 | 2025-09-09 | Underground     | L   | 0.831      | -            | -                | -                | -         |   -16.67 | asap, chelleos, sliimey, Terryyy, TjP   |
|           12 |     1777 | 2025-09-08 | Mindfreak       | W   | 0.825      | 0.278        | 0.001 (0.000)    | 0.294 (0.067)    | 0 (0.000) |     7.82 | asap, chelleos, sliimey, Terryyy, TjP   |
|           11 |     1837 | 2025-09-06 | FURY            | W   | 0.811      | 0.314        | -                | 0.161 (0.041)    | -         |     6.58 | asap, BRACE, chelleos, sliimey, Terryyy |
|           10 |     1978 | 2025-08-29 | SemperFi        | L   | 0.758      | -            | -                | -                | -         |   -10.44 | asap, chelleos, sliimey, Terryyy, TjP   |
|            9 |     2018 | 2025-08-28 | ex-TALON        | W   | 0.751      | -            | -                | -                | -         |     6.07 | asap, chelleos, sliimey, Terryyy, TjP   |
|            8 |     2043 | 2025-08-27 | Mindfreak       | W   | 0.745      | 0.278        | 0.001 (0.000)    | 0.294 (0.061)    | -         |     8.16 | asap, chelleos, sliimey, Terryyy, TjP   |
|            7 |     2435 | 2025-08-13 | Ground Zero     | W   | 0.651      | 0.278        | 0.003 (0.001)    | -                | -         |     8.21 | asap, chelleos, sliimey, Terryyy, TjP   |
|            6 |     2483 | 2025-08-12 | ex-TALON        | L   | 0.645      | -            | -                | -                | -         |   -14.98 | asap, chelleos, sliimey, Terryyy, TjP   |
|            5 |     2539 | 2025-08-11 | DOG             | W   | 0.638      | -            | -                | -                | -         |     2.86 | asap, chelleos, sliimey, Terryyy, TjP   |
|            4 |     2960 | 2025-07-18 | SemperFi        | L   | 0.478      | -            | -                | -                | -         |    -6.84 | asap, chelleos, sliimey, Terryyy, TjP   |
|            3 |     2982 | 2025-07-16 | KZG             | W   | 0.470      | -            | -                | -                | -         |     5.36 | asap, chelleos, sliimey, Terryyy, TjP   |
|            2 |     3032 | 2025-07-15 | ex-TALON        | W   | 0.457      | -            | -                | -                | -         |     3.69 | asap, chelleos, sliimey, Terryyy, TjP   |
|            1 |     3089 | 2025-07-12 | Animus Victoria | W   | 0.439      | -            | -                | -                | -         |     3.77 | asap, chelleos, sliimey, Terryyy, TjP   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,232.73)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-17 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-10-02 |      0.987 | $3,000.00      | $2,961.73       |
| 2025-09-20 |      0.905 | $1,000.00      | $904.72         |
| 2025-09-12 |      0.851 | $1,960.00      | $1,668.89       |
| 2025-08-29 |      0.758 | $1,000.00      | $758.33         |
| 2025-07-18 |      0.478 | $1,966.00      | $939.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
