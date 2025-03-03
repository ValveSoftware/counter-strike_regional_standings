### Roster Details<br />
Team Name: Aether<br />
Roster: Drew, Frost, Izik, LUKE4k, SolGoat<br />
Global Rank: [278](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [87]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  474.9<br />
<br />
Final Rank Value (474.9) = Starting Rank Value (472.4) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.150[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 472.4
- 400 + ( ( 0.038 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 472.4


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
|            7 |     2518 | 2024-10-02 | Nouns            | L   | 0.189      | -            | -                | -                | -         |    -1.20 | Drew, Frost, Izik, LUKE4k, SolGoat   |
|            6 |     2707 | 2024-09-27 | Party Astronauts | L   | 0.155      | -            | -                | -                | -         |    -0.72 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            5 |     2880 | 2024-09-24 | Canada           | W   | 0.135      | 0.371        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     2.48 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            4 |     2919 | 2024-09-23 | DETONATE         | W   | 0.128      | 0.371        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.61 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            3 |     2966 | 2024-09-21 | Dangerous        | W   | 0.116      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.46 | AtomiK, Frost, Izik, LUKE4k, SolGoat |
|            2 |     3144 | 2024-09-15 | vagrants         | L   | 0.075      | -            | -                | -                | -         |    -0.66 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            1 |     3273 | 2024-09-11 | Akimbo           | L   | 0.050      | -            | -                | -                | -         |    -0.47 | AtomiK, Drew, LUKE4k, RiFT, SolGoat  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
