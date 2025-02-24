### Roster Details<br />
Team Name: Aether<br />
Roster: Drew, Frost, Izik, LUKE4k, SolGoat<br />
Global Rank: [273](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [85]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  477.3<br />
<br />
Final Rank Value (477.3) = Starting Rank Value (474.1) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 474.1
- 400 + ( ( 0.039 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 474.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2430 | 2024-10-02 | Nouns            | L   | 0.234      | -            | -                | -                | -         |    -1.41 | Drew, Frost, Izik, LUKE4k, SolGoat   |
|            6 |     2619 | 2024-09-27 | Party Astronauts | L   | 0.200      | -            | -                | -                | -         |    -0.92 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            5 |     2792 | 2024-09-24 | Canada           | W   | 0.180      | 0.371        | 0.001 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     3.31 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            4 |     2831 | 2024-09-23 | DETONATE         | W   | 0.173      | 0.371        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.17 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            3 |     2878 | 2024-09-21 | Dangerous        | W   | 0.161      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.02 | AtomiK, Frost, Izik, LUKE4k, SolGoat |
|            2 |     3056 | 2024-09-15 | vagrants         | L   | 0.121      | -            | -                | -                | -         |    -1.04 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            1 |     3185 | 2024-09-11 | Akimbo           | L   | 0.095      | -            | -                | -                | -         |    -0.88 | AtomiK, Drew, LUKE4k, RiFT, SolGoat  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
