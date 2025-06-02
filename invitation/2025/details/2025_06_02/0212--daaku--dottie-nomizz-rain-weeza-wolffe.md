### Roster Details<br />
Team Name: Daaku<br />
Roster: dottie, nomizz, rain, Weeza, Wolffe<br />
Global Rank: [212](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [115]( ../../standings_europe_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [68]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  589.1<br />
<br />
Final Rank Value (589.1) = Starting Rank Value (537.8) + Head To Head Adjustments (51.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.075<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.8
- 400 + ( ( 0.075 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 537.8


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
|            5 |      759 | 2025-04-24 | Marsborne      | L   | 0.947      | -            | -                | -                | -         |    -5.67 | dottie, nomizz, rain, Weeza, Wolffe |
|            4 |      865 | 2025-04-17 | Wanted Goons   | W   | 0.900      | 0.333        | 0.002 (0.001)    | 0.156 (0.047)    | 0 (0.000) |    17.27 | dottie, mcniff, nomizz, rain, Weeza |
|            3 |      973 | 2025-04-13 | Fisher College | L   | 0.873      | -            | -                | -                | -         |    -6.84 | dottie, mcniff, nomizz, rain, Weeza |
|            2 |     1024 | 2025-04-10 | Marsborne      | W   | 0.853      | 0.333        | 0.019 (0.005)    | 0.633 (0.180)    | 0 (0.000) |    22.20 | dottie, mcniff, nomizz, rain, Weeza |
|            1 |     1133 | 2025-04-07 | BLUEJAYS       | W   | 0.834      | 0.333        | 0.025 (0.007)    | 0.730 (0.203)    | 0 (0.000) |    24.34 | dottie, mcniff, nomizz, rain, Weeza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
