### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: Austin, ben1337, kmrn, ogwizard, sacrifice<br />
Global Rank: [273](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [80]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  472.7<br />
<br />
Final Rank Value (472.7) = Starting Rank Value (480.7) + Head To Head Adjustments (-8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.7
- 400 + ( ( 0.042 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 480.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     3802 | 2025-07-27 | MIGHT        | L   | 0.354      | -            | -                | -                | -         |    -5.51 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            8 |     3867 | 2025-07-24 | LAG          | L   | 0.336      | -            | -                | -                | -         |    -2.35 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            7 |     4130 | 2025-07-11 | LAG          | L   | 0.248      | -            | -                | -                | -         |    -1.74 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            6 |     4298 | 2025-06-25 | Getting Info | L   | 0.142      | -            | -                | -                | -         |    -1.01 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            5 |     4395 | 2025-06-17 | Wanted Goons | W   | 0.089      | 0.333        | 0.000 (0.000)    | 0.139 (0.004)    | 0 (0.000) |     1.57 | ben1337, kmrn, ogwizard, sacrifice, Termina |
|            4 |     4428 | 2025-06-15 | Money Crew   | L   | 0.076      | -            | -                | -                | -         |    -0.74 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            3 |     4454 | 2025-06-14 | BOSS         | L   | 0.069      | -            | -                | -                | -         |    -0.40 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            2 |     4555 | 2025-06-11 | LAG          | W   | 0.049      | 0.333        | 0.005 (0.000)    | 0.431 (0.007)    | 0 (0.000) |     1.21 | Austin, ben1337, kmrn, ogwizard, sacrifice  |
|            1 |     4570 | 2025-06-10 | Nocturnal    | W   | 0.042      | 0.333        | 0.002 (0.000)    | 0.174 (0.002)    | 0 (0.000) |     0.95 | Austin, ben1337, kmrn, ogwizard, sacrifice  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
