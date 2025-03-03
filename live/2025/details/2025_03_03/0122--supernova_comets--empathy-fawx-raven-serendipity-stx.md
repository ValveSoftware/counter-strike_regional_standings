### Roster Details<br />
Team Name: Supernova Comets<br />
Roster: empathy, Fawx, raven, Serendipity, Stx<br />
Global Rank: [122](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  734.1<br />
<br />
Final Rank Value (734.1) = Starting Rank Value (718.8) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.117[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.8
- 400 + ( ( 0.165 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 718.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |        8 | 2025-03-01 | LAG            | L   | 1.000      | -            | -                | -                | -         |   -17.88 | empathy, Fawx, raven, Serendipity, Stx |
|           14 |       12 | 2025-03-01 | F5             | W   | 1.000      | 0.333        | -                | 0.000 (0.000)    | 1 (1.000) |     3.85 | empathy, Fawx, raven, Serendipity, Stx |
|           13 |      753 | 2025-01-04 | Lotus fe       | W   | 0.816      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.52 | empathy, Fawx, milo, raven, Stx        |
|           12 |      873 | 2024-12-15 | Lotus fe       | W   | 0.682      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.84 | empathy, milo, raven, Serendipity, Stx |
|           11 |     1170 | 2024-12-01 | Lotus fe       | W   | 0.588      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.35 | empathy, Fawx, phoebe, raven, Stx      |
|           10 |     1441 | 2024-11-17 | Lotus fe       | W   | 0.495      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.79 | empathy, Fawx, phoebe, raven, Stx      |
|            9 |     1781 | 2024-11-03 | Lotus fe       | W   | 0.402      | 0.250        | 0.002 (0.000)    | -                | 0 (0.000) |     3.17 | Celia, empathy, phoebe, raven, Stx     |
|            8 |     1926 | 2024-10-27 | Unjustified fe | W   | 0.355      | 0.250        | 0.000 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     2.53 | Celia, empathy, phoebe, raven, Stx     |
|            7 |     2095 | 2024-10-18 | Lotus fe       | W   | 0.295      | 0.333        | 0.001 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     2.97 | Celia, gadfly, raven, Serendipity, Stx |
|            6 |     2379 | 2024-10-06 | Imp Pact fe    | W   | 0.216      | 0.250        | 0.000 (0.000)    | -                | 0 (0.000) |     1.54 | Celia, empathy, phoebe, raven, Stx     |
|            5 |     2519 | 2024-10-02 | TSM Impact     | W   | 0.189      | 0.333        | 0.001 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     2.10 | Celia, gadfly, raven, Serendipity, Stx |
|            4 |     2809 | 2024-09-25 | Nouns fe       | W   | 0.142      | 0.333        | 0.001 (0.000)    | 0.089 (0.004)    | -         |     1.56 | gadfly, gone, raven, Serendipity, Stx  |
|            3 |     3017 | 2024-09-19 | FlyQuest RED   | L   | 0.103      | -            | -                | -                | -         |    -1.95 | gadfly, gone, raven, Serendipity, Stx  |
|            2 |     3241 | 2024-09-12 | FLUFFY MAFIA   | L   | 0.056      | -            | -                | -                | -         |    -1.13 | gadfly, gone, raven, Serendipity, Stx  |
|            1 |     3434 | 2024-09-05 | Aware fe       | W   | 0.009      | 0.333        | -                | 0.009 (0.000)    | -         |     0.09 | gadfly, gone, raven, Serendipity, Stx  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,168.58)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-04 |      0.816 | $750.00        | $611.71         |
| 2024-12-15 |      0.682 | $750.00        | $511.71         |
| 2024-12-01 |      0.588 | $750.00        | $441.24         |
| 2024-11-17 |      0.495 | $750.00        | $371.45         |
| 2024-11-03 |      0.402 | $750.00        | $301.50         |
| 2024-10-27 |      0.355 | $750.00        | $266.45         |
| 2024-10-18 |      0.296 | $1,700.00      | $502.88         |
| 2024-10-06 |      0.216 | $750.00        | $161.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
