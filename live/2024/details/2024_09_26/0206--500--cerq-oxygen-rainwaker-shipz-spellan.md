### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN<br />
Global Rank: [206](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [126]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  555.1<br />
<br />
Final Rank Value (555.1) = Starting Rank Value (525.8) + Head To Head Adjustments (29.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.8
- 400 + ( ( 0.067 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 525.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        4 | 2024-09-26 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |    -4.86 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|           12 |      489 | 2024-09-11 | Molotov           | L   | 1.000      | -            | -                | -                | -         |    -8.72 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|           11 |      591 | 2024-09-07 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |    -5.45 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|           10 |      625 | 2024-09-06 | K27               | W   | 1.000      | 0.372        | 0.000 (0.000)    | 0.260 (0.097)    | 0 (0.000) |    18.31 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            9 |     1289 | 2024-08-19 | Cloud9            | L   | 0.948      | -            | -                | -                | -         |    -2.44 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            8 |     1293 | 2024-08-19 | kONO              | W   | 0.947      | 0.143        | 0.022 (0.003)    | 0.522 (0.071)    | 0 (0.000) |    25.27 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            7 |     1301 | 2024-08-19 | Spirit Academy    | W   | 0.947      | 0.143        | 0.030 (0.004)    | 0.627 (0.085)    | 0 (0.000) |    25.88 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            6 |     1353 | 2024-08-17 | GenOne            | L   | 0.933      | -            | -                | -                | -         |   -13.97 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            5 |     2496 | 2024-07-16 | TSM               | L   | 0.719      | -            | -                | -                | -         |    -1.27 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            4 |     2635 | 2024-07-09 | Rebels            | L   | 0.674      | -            | -                | -                | -         |    -1.63 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            3 |     2645 | 2024-07-09 | kONO              | L   | 0.673      | -            | -                | -                | -         |    -3.32 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN      |
|            2 |     4083 | 2024-05-06 | Gaimin Gladiators | L   | 0.246      | -            | -                | -                | -         |    -0.79 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ |
|            1 |     4139 | 2024-05-03 | Soda              | W   | 0.226      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.34 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
