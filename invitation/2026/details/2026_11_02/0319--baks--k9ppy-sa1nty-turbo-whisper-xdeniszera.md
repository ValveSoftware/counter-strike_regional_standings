### Roster Details<br />
Team Name: BAKS<br />
Roster: k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA<br />
Global Rank: [319](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [210]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  525.1<br />
<br />
Final Rank Value (525.1) = Starting Rank Value (523.9) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.9
- 400 + ( ( 0.066 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 523.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4622 | 2026-06-19 | Lilmix          | L   | 0.294      | -            | -                | -                | -         |    -2.01 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            4 |     5378 | 2026-05-23 | Butterfly       | L   | 0.113      | -            | -                | -                | -         |    -0.33 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            3 |     5403 | 2026-05-23 | UPGRADE         | L   | 0.112      | -            | -                | -                | -         |    -0.06 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            2 |     5444 | 2026-05-22 | eternal premium | W   | 0.105      | 0.303        | 0.000 (0.000)    | 0.137 (0.004)    | 1 (0.105) |     1.70 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            1 |     5454 | 2026-05-22 | Xcity           | W   | 0.104      | 0.303        | 0.000 (0.000)    | 0.055 (0.002)    | 1 (0.104) |     1.82 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($421.93)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      0.308 | $1,000.00      | $307.64         |
| 2026-05-23 |      0.114 | $1,000.00      | $114.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
