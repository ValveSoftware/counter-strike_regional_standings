### Roster Details<br />
Team Name: SPORT<br />
Roster: DANVIET, PremiuM, timid, voltera, xns<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [169](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  667.6<br />
<br />
Final Rank Value (667.6) = Starting Rank Value (716.9) + Head To Head Adjustments (-49.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.9
- 400 + ( ( 0.157 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 716.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      169 | 2024-07-19 | Yawara         | L   | 1.000      | -            | -                | -                | -         |   -23.25 | DANVIET, PremiuM, timid, voltera, xns  |
|           10 |      194 | 2024-07-18 | 9z Academy     | L   | 1.000      | -            | -                | -                | -         |   -23.82 | DANVIET, PremiuM, timid, voltera, xns  |
|            9 |      265 | 2024-07-17 | W7M            | L   | 1.000      | -            | -                | -                | -         |   -11.97 | DANVIET, PremiuM, timid, voltera, xns  |
|            8 |      282 | 2024-07-17 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |    -9.46 | DANVIET, PremiuM, timid, voltera, xns  |
|            7 |      338 | 2024-07-16 | Hype           | L   | 1.000      | -            | -                | -                | -         |    -9.49 | DANVIET, PremiuM, timid, voltera, xns  |
|            6 |      433 | 2024-07-12 | BESTIA         | W   | 1.000      | 0.333        | 0.114 (0.038)    | 0.740 (0.247)    | 0 (0.000) |    26.24 | DANVIET, PremiuM, timid, voltera, xns  |
|            5 |      454 | 2024-07-11 | paiN Academy   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.49 | DANVIET, PremiuM, timid, voltera, xns  |
|            4 |      490 | 2024-07-09 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -4.30 | DANVIET, PremiuM, timid, voltera, xns  |
|            3 |      508 | 2024-07-08 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |    -2.12 | DANVIET, PremiuM, timid, voltera, xns  |
|            2 |      584 | 2024-06-20 | ex-Corinthians | W   | 0.974      | 0.270        | 0.005 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     7.93 | DANVIET, farias, PremiuM, voltera, xns |
|            1 |     2438 | 2024-04-16 | ODDIK          | L   | 0.542      | -            | -                | -                | -         |    -3.49 | DANVIET, farias, PremiuM, voltera, xns |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,558.10)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
