### Roster Details<br />
Team Name: Galorys<br />
Roster: Alisson, bacc, divine, kadzz, pepe<br />
Global Rank: [260](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [87]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  471.1<br />
<br />
Final Rank Value (471.1) = Starting Rank Value (481.1) + Head To Head Adjustments (-10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.1
- 400 + ( ( 0.044 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 481.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1494 | 2025-03-28 | VELOX        | L   | 0.765      | -            | -                | -                | -         |   -12.58 | Alisson, bacc, divine, kadzz, pepe |
|            6 |     1554 | 2025-03-27 | Solid        | L   | 0.759      | -            | -                | -                | -         |    -2.34 | Alisson, bacc, divine, kadzz, pepe |
|            5 |     2089 | 2025-03-09 | Dusty Roots  | L   | 0.639      | -            | -                | -                | -         |    -5.61 | Alisson, bacc, divine, kadzz, pepe |
|            4 |     2161 | 2025-03-08 | thekillaz fe | W   | 0.632      | 0.143        | 0.002 (0.000)    | 0.091 (0.008)    | 0 (0.000) |    13.14 | Alisson, bacc, divine, kadzz, pepe |
|            3 |     2223 | 2025-03-07 | Legacy       | L   | 0.626      | -            | -                | -                | -         |    -1.25 | Alisson, bacc, divine, kadzz, pepe |
|            2 |     3041 | 2025-02-08 | NITRO        | L   | 0.446      | -            | -                | -                | -         |    -6.75 | Alisson, bacc, divine, kadzz, pepe |
|            1 |     3096 | 2025-02-07 | 2070         | W   | 0.440      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.34 | Alisson, bacc, divine, kadzz, pepe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
