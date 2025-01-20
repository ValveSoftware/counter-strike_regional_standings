### Roster Details<br />
Team Name: DASH<br />
Roster: ch1rs, Dawy, Flierax, nifee, Psycho<br />
Global Rank: [165](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [110]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  685.4<br />
<br />
Final Rank Value (685.4) = Starting Rank Value (692.3) + Head To Head Adjustments (-6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.3
- 400 + ( ( 0.148 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 692.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      304 | 2024-12-09 | TNL               | L   | 0.946      | -            | -                | -                | -         |   -10.08 | ch1rs, Dawy, Flierax, nifee, Psycho  |
|           11 |     2635 | 2024-09-07 | L&G               | L   | 0.326      | -            | -                | -                | -         |    -3.09 | cairne, Dawy, Flierax, nifee, Psycho |
|           10 |     2698 | 2024-09-05 | FLuffy Gangsters  | L   | 0.312      | -            | -                | -                | -         |    -4.11 | cairne, Dawy, Flierax, nifee, Psycho |
|            9 |     2716 | 2024-09-05 | Into the Breach   | L   | 0.311      | -            | -                | -                | -         |    -2.51 | cairne, Dawy, Flierax, nifee, Psycho |
|            8 |     2783 | 2024-09-03 | Zero Tenacity     | L   | 0.297      | -            | -                | -                | -         |    -1.26 | cairne, Dawy, Flierax, nifee, Psycho |
|            7 |     3103 | 2024-08-26 | Gaimin Gladiators | W   | 0.243      | 0.384        | 0.080 (0.007)    | 0.873 (0.082)    | 0 (0.000) |     6.04 | cairne, Dawy, Flierax, nifee, Psycho |
|            6 |     3217 | 2024-08-22 | Endpoint          | W   | 0.217      | 0.384        | 0.034 (0.003)    | 0.566 (0.047)    | 0 (0.000) |     4.90 | cairne, Dawy, Flierax, nifee, Psycho |
|            5 |     3516 | 2024-08-13 | Rebels            | L   | 0.157      | -            | -                | -                | -         |    -1.67 | cairne, Dawy, Flierax, nifee, Psycho |
|            4 |     3666 | 2024-08-08 | Nexus             | W   | 0.123      | 0.143        | 0.401 (0.007)    | 0.765 (0.013)    | 0 (0.000) |     3.83 | cairne, Dawy, Flierax, nifee, Psycho |
|            3 |     3713 | 2024-08-07 | Sampi             | L   | 0.116      | -            | -                | -                | -         |    -0.58 | cairne, Dawy, Flierax, nifee, Psycho |
|            2 |     4045 | 2024-07-29 | ECLOT             | W   | 0.057      | 0.143        | 0.286 (0.002)    | 1.000 (0.008)    | 0 (0.000) |     1.75 | cairne, Dawy, Flierax, nifee, Psycho |
|            1 |     4262 | 2024-07-22 | ex-Enterprise     | L   | 0.011      | -            | -                | -                | -         |    -0.09 | cairne, Dawy, Flierax, nifee, Psycho |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,206.49)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
