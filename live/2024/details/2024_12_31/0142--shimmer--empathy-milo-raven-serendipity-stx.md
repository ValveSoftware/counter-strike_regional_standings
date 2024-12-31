### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, milo, raven, Serendipity, Stx<br />
Global Rank: [142](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [33]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  750.5<br />
<br />
Final Rank Value (750.5) = Starting Rank Value (694.0) + Head To Head Adjustments (56.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.0
- 400 + ( ( 0.151 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 694.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      110 | 2024-12-15 | Lotus fe         | W   | 1.000      | 0.250        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.74 | empathy, milo, raven, Serendipity, Stx |
|           12 |      403 | 2024-12-01 | Lotus fe         | W   | 1.000      | 0.250        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     7.16 | empathy, Fawx, phoebe, raven, Stx      |
|           11 |      671 | 2024-11-17 | Lotus fe         | W   | 0.921      | 0.250        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     7.03 | empathy, Fawx, phoebe, raven, Stx      |
|           10 |     1005 | 2024-11-03 | Lotus fe         | W   | 0.828      | 0.250        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.71 | Celia, empathy, phoebe, raven, Stx     |
|            9 |     1148 | 2024-10-27 | Unjustified fe   | W   | 0.781      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.92 | Celia, empathy, phoebe, raven, Stx     |
|            8 |     1315 | 2024-10-18 | Lotus fe         | W   | 0.721      | 0.333        | 0.003 (0.001)    | 0.021 (0.005)    | 0 (0.000) |     7.83 | Celia, gadfly, raven, Serendipity, Stx |
|            7 |     1580 | 2024-10-06 | Imp Pact fe      | W   | 0.642      | -            | -                | -                | 0 (0.000) |     5.12 | Celia, empathy, phoebe, raven, Stx     |
|            6 |     1715 | 2024-10-02 | TSM Impact       | W   | 0.615      | 0.333        | 0.005 (0.001)    | 0.091 (0.019)    | 0 (0.000) |     8.79 | Celia, gadfly, raven, Serendipity, Stx |
|            5 |     1992 | 2024-09-25 | Nouns fe         | W   | 0.568      | 0.333        | 0.004 (0.001)    | 0.075 (0.014)    | 0 (0.000) |     7.24 | gadfly, gone, raven, Serendipity, Stx  |
|            4 |     2193 | 2024-09-19 | FlyQuest RED     | L   | 0.529      | -            | -                | -                | -         |    -8.05 | gadfly, gone, raven, Serendipity, Stx  |
|            3 |     2410 | 2024-09-12 | FLUFFY MAFIA     | L   | 0.482      | -            | -                | -                | -         |    -8.37 | gadfly, gone, raven, Serendipity, Stx  |
|            2 |     2602 | 2024-09-05 | Aware fe         | W   | 0.435      | 0.333        | 0.003 (0.000)    | 0.025 (0.004)    | 0 (0.000) |     5.44 | gadfly, gone, raven, Serendipity, Stx  |
|            1 |     2843 | 2024-08-28 | Blue Otter Karma | W   | 0.382      | 0.333        | 0.003 (0.000)    | 0.041 (0.005)    | -         |     4.99 | gadfly, gone, raven, Serendipity, Stx  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,106.58)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $750.00        | $750.00         |
| 2024-12-01 |      1.000 | $750.00        | $750.00         |
| 2024-11-17 |      0.921 | $750.00        | $691.02         |
| 2024-11-03 |      0.828 | $750.00        | $621.07         |
| 2024-10-27 |      0.781 | $750.00        | $586.02         |
| 2024-10-18 |      0.722 | $1,700.00      | $1,227.25       |
| 2024-10-06 |      0.642 | $750.00        | $481.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
