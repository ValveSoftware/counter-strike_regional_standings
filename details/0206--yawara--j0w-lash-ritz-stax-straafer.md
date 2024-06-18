### Roster Details<br />
Team Name: Yawara<br />
Roster: j0w, lash, ritz, stAx, Straafer<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [206](../standings_global.md)<br />
Regional Rank: [56]( ../standings_americas.md)<br />
Final Rank Value:  468.5<br />
<br />
Final Rank Value (468.5) = Starting Rank Value (510.9) + Head To Head Adjustments (-42.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.9
- 400 + ( ( 0.055 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 510.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      655 | 2024-05-31 | 9z Academy | L   | 1.000      | -            | -                | -                | -         |   -19.25 | j0w, lash, ritz, stAx, Straafer |
|           10 |      692 | 2024-05-29 | Vikings KR | L   | 1.000      | -            | -                | -                | -         |    -6.37 | j0w, lash, perez, ritz, stAx    |
|            9 |      719 | 2024-05-28 | W7M        | L   | 1.000      | -            | -                | -                | -         |    -6.25 | j0w, lash, perez, ritz, stAx    |
|            8 |     1063 | 2024-05-16 | Case       | L   | 0.982      | -            | -                | -                | -         |    -3.61 | j0w, lash, perez, ritz, stAx    |
|            7 |     1192 | 2024-05-13 | Galorys    | L   | 0.963      | -            | -                | -                | -         |    -3.22 | j0w, lash, perez, ritz, stAx    |
|            6 |     1316 | 2024-05-08 | Intense    | L   | 0.929      | -            | -                | -                | -         |   -13.17 | j0w, lash, perez, ritz, stAx    |
|            5 |     1345 | 2024-05-06 | Solid      | L   | 0.917      | -            | -                | -                | -         |    -3.41 | j0w, lash, perez, ritz, stAx    |
|            4 |     2606 | 2024-03-13 | Sharks     | L   | 0.558      | -            | -                | -                | -         |    -1.16 | j0w, lash, leleo, perez, stAx   |
|            3 |     2622 | 2024-03-13 | Case       | W   | 0.556      | 0.143        | 0.026 (0.002)    | 0.579 (0.046)    | 0 (0.000) |    15.47 | j0w, lash, leleo, perez, stAx   |
|            2 |     3286 | 2024-02-14 | Imperial   | L   | 0.371      | -            | -                | -                | -         |    -0.04 | j0w, lash, leleo, perez, stAx   |
|            1 |     4221 | 2024-01-09 | Case       | L   | 0.129      | -            | -                | -                | -         |    -1.34 | j0w, lash, ritz, stAx, syncmau  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
