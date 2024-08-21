### Roster Details<br />
Team Name: adalYamigos<br />
Roster: delboNi, f4stzin, piriajr, shz, zqkS<br />
Global Rank: [199](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_21.md)<br />
Regional Rank: [54]( ../../standings_americas_2024_08_21.md)<br />
<br />
Final Rank Value:  576.6<br />
<br />
Final Rank Value (576.6) = Starting Rank Value (553.9) + Head To Head Adjustments (22.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 553.9
- 400 + ( ( 0.078 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 553.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3454 | 2024-04-12 | Case     | L   | 0.328      | -            | -                | -                | -         |    -1.04 | delboNi, f4stzin, piriajr, shz, zqkS |
|           13 |     3474 | 2024-04-11 | Imperial | L   | 0.321      | -            | -                | -                | -         |    -0.37 | delboNi, f4stzin, piriajr, shz, zqkS |
|           12 |     3563 | 2024-04-09 | MIBR     | L   | 0.308      | -            | -                | -                | -         |    -0.12 | delboNi, f4stzin, piriajr, shz, zqkS |
|           11 |     3567 | 2024-04-09 | MIBR     | L   | 0.307      | -            | -                | -                | -         |    -0.12 | delboNi, f4stzin, piriajr, shz, zqkS |
|           10 |     3639 | 2024-04-07 | Case     | W   | 0.295      | 0.435        | 0.044 (0.006)    | 0.731 (0.094)    | 0 (0.000) |     8.41 | delboNi, f4stzin, piriajr, shz, zqkS |
|            9 |     3674 | 2024-04-05 | 2GAME    | L   | 0.280      | -            | -                | -                | -         |    -3.57 | delboNi, f4stzin, piriajr, shz, zqkS |
|            8 |     3675 | 2024-04-05 | 2GAME    | W   | 0.280      | 0.450        | 0.002 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     5.36 | delboNi, f4stzin, piriajr, shz, zqkS |
|            7 |     3694 | 2024-04-04 | BESTIA   | W   | 0.275      | 0.450        | 0.113 (0.014)    | 0.804 (0.099)    | 0 (0.000) |     7.87 | delboNi, f4stzin, piriajr, shz, zqkS |
|            6 |     3698 | 2024-04-04 | BESTIA   | L   | 0.274      | -            | -                | -                | -         |    -0.77 | delboNi, f4stzin, piriajr, shz, zqkS |
|            5 |     4185 | 2024-03-12 | Solid    | L   | 0.121      | -            | -                | -                | -         |    -1.25 | delboNi, f4stzin, piriajr, shz, zqkS |
|            4 |     4224 | 2024-03-10 | BESTIA   | W   | 0.108      | 0.435        | 0.113 (0.005)    | 0.804 (0.038)    | 0 (0.000) |     3.13 | delboNi, f4stzin, piriajr, shz, zqkS |
|            3 |     4278 | 2024-03-08 | Flamengo | W   | 0.093      | 0.435        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.85 | delboNi, f4stzin, piriajr, shz, zqkS |
|            2 |     4358 | 2024-03-05 | Case     | W   | 0.074      | 0.450        | 0.044 (0.001)    | 0.731 (0.024)    | 0 (0.000) |     2.15 | delboNi, f4stzin, piriajr, shz, zqkS |
|            1 |     4360 | 2024-03-05 | Case     | W   | 0.074      | 0.450        | 0.044 (0.001)    | 0.731 (0.024)    | 0 (0.000) |     2.15 | delboNi, f4stzin, piriajr, shz, zqkS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
