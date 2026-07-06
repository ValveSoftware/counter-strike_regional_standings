### Roster Details<br />
Team Name: BAKS<br />
Roster: k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA<br />
Global Rank: [216](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [146]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  707.9<br />
<br />
Final Rank Value (707.9) = Starting Rank Value (706.7) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.188[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.7
- 400 + ( ( 0.163 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 706.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      203 | 2026-06-19 | ReThink              | L   | 1.000      | -            | -                | -                | -         |   -10.27 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            4 |      959 | 2026-05-23 | Oxuji                | L   | 0.907      | -            | -                | -                | -         |    -3.44 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            3 |      984 | 2026-05-23 | CYBERSHOKE Prospects | L   | 0.905      | -            | -                | -                | -         |    -2.72 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            2 |     1025 | 2026-05-22 | eternal premium      | W   | 0.899      | 0.303        | 0.000 (0.000)    | 0.286 (0.078)    | 1 (0.899) |    13.31 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            1 |     1035 | 2026-05-22 | Xcity                | W   | 0.898      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.898) |     4.23 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,907.99)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-05-23 |      0.908 | $1,000.00      | $907.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
