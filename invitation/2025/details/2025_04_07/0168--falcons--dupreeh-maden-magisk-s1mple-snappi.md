### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [168](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [106]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  639.7<br />
<br />
Final Rank Value (639.7) = Starting Rank Value (632.6) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.247[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.6
- 400 + ( ( 0.126 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 632.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2356 | 2024-11-19 | GamerLegion  | L   | 0.272      | -            | -                | -                | -         |    -0.08 | dupreeh, Maden, Magisk, s1mple, Snappi |
|            7 |     2372 | 2024-11-17 | SAW          | L   | 0.264      | -            | -                | -                | -         |    -0.13 | dupreeh, Maden, Magisk, s1mple, Snappi |
|            6 |     2383 | 2024-11-17 | FaZe         | L   | 0.259      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, s1mple, Snappi |
|            5 |     2396 | 2024-11-16 | ECLOT        | W   | 0.258      | 0.143        | 0.114 (0.004)    | 0.708 (0.026)    | 1 (0.258) |     7.37 | dupreeh, Maden, Magisk, s1mple, Snappi |
|            4 |     2909 | 2024-10-26 | Eternal Fire | L   | 0.112      | -            | -                | -                | -         |    -0.00 | dupreeh, Maden, Magisk, s1mple, Snappi |
|            3 |     2930 | 2024-10-25 | SAW          | L   | 0.106      | -            | -                | -                | -         |    -0.05 | dupreeh, Maden, Magisk, s1mple, Snappi |
|            2 |     2966 | 2024-10-21 | Virtus.pro   | L   | 0.081      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, s1mple, Snappi |
|            1 |     2973 | 2024-10-21 | 3DMAX        | L   | 0.079      | -            | -                | -                | -         |    -0.01 | dupreeh, Maden, Magisk, s1mple, Snappi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($241.49)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.121 | $2,000.00      | $241.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
