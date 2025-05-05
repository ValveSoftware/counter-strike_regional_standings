### Roster Details<br />
Team Name: Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [277](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [84]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  467.0<br />
<br />
Final Rank Value (467.0) = Starting Rank Value (467.8) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 467.8
- 400 + ( ( 0.037 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 467.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3193 | 2024-11-15 | Metizport | L   | 0.059      | -            | -                | -                | -         |    -0.12 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            4 |     3195 | 2024-11-15 | Mindfreak | L   | 0.059      | -            | -                | -                | -         |    -0.53 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            3 |     3212 | 2024-11-14 | Norway    | L   | 0.054      | -            | -                | -                | -         |    -0.81 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            2 |     3259 | 2024-11-13 | Sangal    | L   | 0.046      | -            | -                | -                | -         |    -0.36 | Gabie, J0LZ, Melio, Pluto, YuZ |
|            1 |     3262 | 2024-11-13 | PCIFIC    | W   | 0.046      | 0.617        | 0.000 (0.000)    | 0.089 (0.003)    | 1 (0.046) |     1.00 | Gabie, J0LZ, Melio, Pluto, YuZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
