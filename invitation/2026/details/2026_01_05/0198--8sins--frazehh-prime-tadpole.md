### Roster Details<br />
Team Name: 8Sins<br />
Roster: Frazehh, Prime, Tadpole<br />
Global Rank: [198](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [129]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  666.8<br />
<br />
Final Rank Value (666.8) = Starting Rank Value (673.3) + Head To Head Adjustments (-6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.047[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.3
- 400 + ( ( 0.138 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 673.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      344 | 2025-12-06 | Washington | L   | 1.000      | -            | -                | -                | -         |   -13.30 | Bigun007, dobbo, Frazehh, Prime, Tadpole    |
|            4 |      903 | 2025-11-13 | Coalesce   | W   | 0.848      | 0.264        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.62 | Bigun007, dobbo, Frazehh, Prime, Tadpole    |
|            3 |     1359 | 2025-11-01 | Phantom    | L   | 0.767      | -            | -                | -                | -         |    -8.03 | dobbo, Frazehh, JAUSTERE, Prime, Tadpole    |
|            2 |     3100 | 2025-09-13 | Washington | W   | 0.440      | 0.288        | 0.007 (0.001)    | 0.214 (0.027)    | 1 (0.440) |     8.62 | Bigun007, Frazehh, JAUSTERE, Prime, Tadpole |
|            1 |     3739 | 2025-08-20 | Glitchtech | W   | 0.281      | 0.265        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.57 | Bigun007, Frazehh, JAUSTERE, Prime, Tadpole |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,135.93)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-06 |      1.000 | $1,053.00      | $1,053.00       |
| 2025-11-02 |      0.773 | $99.00         | $76.52          |
| 2025-09-13 |      0.440 | $2,287.00      | $1,006.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
