### Roster Details<br />
Team Name: 8Sins<br />
Roster: Dutchy, moz, Prime, wfn, Wolfie<br />
Global Rank: [119](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  706.3<br />
<br />
Final Rank Value (706.3) = Starting Rank Value (705.1) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.1
- 400 + ( ( 0.166 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 705.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1042 | 2025-02-23 | ALASKA        | L   | 0.913      | -            | -                | -                | -         |   -10.16 | Dutchy, moz, Prime, wfn, Wolfie  |
|            4 |     1056 | 2025-02-22 | ALASKA        | W   | 0.908      | 0.303        | 0.025 (0.007)    | 0.428 (0.118)    | 1 (0.908) |    18.60 | Dutchy, moz, Prime, wfn, Wolfie  |
|            3 |     2339 | 2024-11-20 | Belfast Storm | L   | 0.282      | -            | -                | -                | -         |    -5.62 | coldpera, f0cus, moz, Prime, wfn |
|            2 |     2880 | 2024-10-27 | VFE           | L   | 0.119      | -            | -                | -                | -         |    -2.42 | f0cus, Menace, moz, Prime, wfn   |
|            1 |     2886 | 2024-10-26 | Dripmen       | W   | 0.115      | 0.315        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.115) |     0.87 | f0cus, Menace, moz, Prime, wfn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,323.40)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.913 | $1,326.00      | $1,211.02       |
| 2024-10-27 |      0.120 | $937.00        | $112.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
