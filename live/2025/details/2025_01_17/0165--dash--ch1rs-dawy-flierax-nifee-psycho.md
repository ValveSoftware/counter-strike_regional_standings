### Roster Details<br />
Team Name: DASH<br />
Roster: ch1rs, Dawy, Flierax, nifee, Psycho<br />
Global Rank: [165](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [111]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  684.3<br />
<br />
Final Rank Value (684.3) = Starting Rank Value (691.5) + Head To Head Adjustments (-7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.5
- 400 + ( ( 0.147 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 691.5


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
|           12 |      281 | 2024-12-09 | TNL               | L   | 0.940      | -            | -                | -                | -         |    -9.99 | ch1rs, Dawy, Flierax, nifee, Psycho  |
|           11 |     2612 | 2024-09-07 | L&G               | L   | 0.319      | -            | -                | -                | -         |    -3.03 | cairne, Dawy, Flierax, nifee, Psycho |
|           10 |     2675 | 2024-09-05 | FLuffy Gangsters  | L   | 0.306      | -            | -                | -                | -         |    -4.04 | cairne, Dawy, Flierax, nifee, Psycho |
|            9 |     2693 | 2024-09-05 | Into the Breach   | L   | 0.304      | -            | -                | -                | -         |    -2.53 | cairne, Dawy, Flierax, nifee, Psycho |
|            8 |     2760 | 2024-09-03 | Zero Tenacity     | L   | 0.291      | -            | -                | -                | -         |    -1.25 | cairne, Dawy, Flierax, nifee, Psycho |
|            7 |     3080 | 2024-08-26 | Gaimin Gladiators | W   | 0.237      | 0.384        | 0.080 (0.007)    | 0.873 (0.080)    | 0 (0.000) |     5.89 | cairne, Dawy, Flierax, nifee, Psycho |
|            6 |     3194 | 2024-08-22 | Endpoint          | W   | 0.211      | 0.384        | 0.033 (0.003)    | 0.515 (0.042)    | 0 (0.000) |     4.74 | cairne, Dawy, Flierax, nifee, Psycho |
|            5 |     3493 | 2024-08-13 | Rebels            | L   | 0.150      | -            | -                | -                | -         |    -1.62 | cairne, Dawy, Flierax, nifee, Psycho |
|            4 |     3643 | 2024-08-08 | Nexus             | W   | 0.117      | 0.143        | 0.401 (0.007)    | 0.766 (0.013)    | 0 (0.000) |     3.63 | cairne, Dawy, Flierax, nifee, Psycho |
|            3 |     3690 | 2024-08-07 | Sampi             | L   | 0.110      | -            | -                | -                | -         |    -0.55 | cairne, Dawy, Flierax, nifee, Psycho |
|            2 |     4022 | 2024-07-29 | ECLOT             | W   | 0.051      | 0.143        | 0.286 (0.002)    | 1.000 (0.007)    | 0 (0.000) |     1.56 | cairne, Dawy, Flierax, nifee, Psycho |
|            1 |     4239 | 2024-07-22 | ex-Enterprise     | L   | 0.005      | -            | -                | -                | -         |    -0.04 | cairne, Dawy, Flierax, nifee, Psycho |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,199.12)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
