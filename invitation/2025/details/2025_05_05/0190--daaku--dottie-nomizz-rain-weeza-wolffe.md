### Roster Details<br />
Team Name: Daaku<br />
Roster: dottie, nomizz, rain, Weeza, Wolffe<br />
Global Rank: [190](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [114]( ../../standings_europe_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [48]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  599.8<br />
<br />
Final Rank Value (599.8) = Starting Rank Value (542.7) + Head To Head Adjustments (57.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.7
- 400 + ( ( 0.079 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 542.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      138 | 2025-04-24 | Marsborne      | L   | 1.000      | -            | -                | -                | -         |    -6.96 | dottie, nomizz, rain, Weeza, Wolffe |
|            4 |      232 | 2025-04-17 | Wanted Goons   | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.254 (0.085)    | 0 (0.000) |    18.64 | dottie, mcniff, nomizz, rain, Weeza |
|            3 |      340 | 2025-04-13 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -8.55 | dottie, mcniff, nomizz, rain, Weeza |
|            2 |      389 | 2025-04-10 | Marsborne      | W   | 1.000      | 0.333        | 0.019 (0.006)    | 0.568 (0.189)    | 0 (0.000) |    25.21 | dottie, mcniff, nomizz, rain, Weeza |
|            1 |      453 | 2025-04-07 | BLUEJAYS       | W   | 1.000      | 0.333        | 0.016 (0.005)    | 0.886 (0.295)    | 0 (0.000) |    28.73 | dottie, mcniff, nomizz, rain, Weeza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
