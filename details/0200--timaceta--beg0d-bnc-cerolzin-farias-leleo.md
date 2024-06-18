### Roster Details<br />
Team Name: TIMACETA<br />
Roster: beg0d, bnc, cerolzin, farias, leleo<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [200](../standings_global.md)<br />
Regional Rank: [54]( ../standings_americas.md)<br />
Final Rank Value:  522.2<br />
<br />
Final Rank Value (522.2) = Starting Rank Value (513.8) + Head To Head Adjustments (8.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.8
- 400 + ( ( 0.056 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 513.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3724 | 2024-01-21 | Flamengo    | L   | 0.209      | -            | -                | -                | -         |    -3.21 | beg0d, bnc, cerolzin, farias, leleo |
|            9 |     3760 | 2024-01-20 | W7M         | L   | 0.203      | -            | -                | -                | -         |    -1.17 | beg0d, bnc, cerolzin, farias, leleo |
|            8 |     3800 | 2024-01-19 | MIBR        | L   | 0.198      | -            | -                | -                | -         |    -0.01 | beg0d, bnc, cerolzin, farias, leleo |
|            7 |     3805 | 2024-01-19 | Sharks      | W   | 0.197      | 0.143        | 0.044 (0.001)    | 0.429 (0.012)    | 0 (0.000) |     5.79 | beg0d, bnc, cerolzin, farias, leleo |
|            6 |     3974 | 2024-01-16 | W7M         | L   | 0.177      | -            | -                | -                | -         |    -1.01 | beg0d, bnc, cerolzin, farias, leleo |
|            5 |     4012 | 2024-01-15 | BESTIA      | W   | 0.171      | 0.143        | 0.052 (0.001)    | 0.594 (0.015)    | 0 (0.000) |     5.08 | beg0d, bnc, cerolzin, farias, leleo |
|            4 |     4144 | 2024-01-11 | adalYamigos | L   | 0.144      | -            | -                | -                | -         |    -1.58 | beg0d, bnc, cerolzin, farias, leleo |
|            3 |     4148 | 2024-01-11 | KRÜ         | W   | 0.143      | 0.143        | 0.024 (0.000)    | 0.150 (0.003)    | 0 (0.000) |     3.82 | beg0d, bnc, cerolzin, farias, leleo |
|            2 |     4161 | 2024-01-11 | NIGERIA 96  | W   | 0.143      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.56 | beg0d, bnc, cerolzin, farias, leleo |
|            1 |     4218 | 2024-01-09 | Corinthians | L   | 0.130      | -            | -                | -                | -         |    -0.84 | beg0d, bnc, cerolzin, farias, leleo |

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
