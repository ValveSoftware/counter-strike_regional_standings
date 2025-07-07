### Roster Details<br />
Team Name: Aether<br />
Roster: denz, Izik, MJB, Pr0mise, SolGoat<br />
Global Rank: [261](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [84]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  400.5<br />
<br />
Final Rank Value (400.5) = Starting Rank Value (400.0) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1892 | 2025-03-29 | LAG        | L   | 0.535      | -            | -                | -                | -         |    -1.82 | denz, Izik, MJB, Pr0mise, SolGoat   |
|            4 |     1952 | 2025-03-28 | seoul      | W   | 0.529      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.17 | denz, Izik, MJB, Pr0mise, SolGoat   |
|            3 |     2012 | 2025-03-27 | Aether     | L   | 0.523      | -            | -                | -                | -         |    -2.91 | denz, Izik, MJB, Pr0mise, SolGoat   |
|            2 |     2777 | 2025-03-06 | Worms      | L   | 0.380      | -            | -                | -                | -         |    -2.82 | AtomiK, denz, MJB, Pr0mise, SolGoat |
|            1 |     2822 | 2025-03-05 | Complexity | L   | 0.374      | -            | -                | -                | -         |    -0.10 | AtomiK, denz, MJB, Pr0mise, SolGoat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
