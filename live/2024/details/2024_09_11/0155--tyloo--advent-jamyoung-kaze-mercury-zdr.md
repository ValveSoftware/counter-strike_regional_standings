### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Global Rank: [155](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_11.md)<br />
Regional Rank: [13]( ../../standings_asia_2024_09_11.md)<br />
<br />
Final Rank Value:  704.0<br />
<br />
Final Rank Value (704.0) = Starting Rank Value (695.4) + Head To Head Adjustments (8.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.4
- 400 + ( ( 0.152 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 695.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3772 | 2024-04-27 | M80           | L   | 0.286      | -            | -                | -                | -         |    -0.61 | advent, JamYoung, kaze, Mercury, zdr |
|           10 |     3795 | 2024-04-26 | Sharks        | W   | 0.281      | 0.889        | 0.014 (0.004)    | 0.012 (0.003)    | 1 (0.281) |     4.63 | advent, JamYoung, kaze, Mercury, zdr |
|            9 |     3832 | 2024-04-25 | Falcons       | L   | 0.272      | -            | -                | -                | -         |    -0.09 | advent, JamYoung, kaze, Mercury, zdr |
|            8 |     3854 | 2024-04-24 | G2            | L   | 0.265      | -            | -                | -                | -         |    -0.01 | advent, JamYoung, kaze, Mercury, zdr |
|            7 |     3987 | 2024-04-19 | Rare Atom     | L   | 0.232      | -            | -                | -                | -         |    -2.23 | advent, JamYoung, kaze, Mercury, zdr |
|            6 |     4027 | 2024-04-18 | The MongolZ   | L   | 0.226      | -            | -                | -                | -         |    -0.01 | advent, JamYoung, kaze, Mercury, zdr |
|            5 |     4040 | 2024-04-18 | Lynn Vision   | W   | 0.225      | 0.143        | 0.072 (0.002)    | 0.107 (0.003)    | 0 (0.000) |     5.39 | advent, JamYoung, kaze, Mercury, zdr |
|            4 |     4071 | 2024-04-17 | Sheer Conquer | W   | 0.219      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.59 | advent, JamYoung, kaze, Mercury, zdr |
|            3 |     4077 | 2024-04-17 | The Huns      | W   | 0.218      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.11 | advent, JamYoung, kaze, Mercury, zdr |
|            2 |     4325 | 2024-04-08 | Lynn Vision   | L   | 0.159      | -            | -                | -                | -         |    -1.19 | advent, JamYoung, kaze, Mercury, zdr |
|            1 |     4335 | 2024-04-08 | MOUZ          | L   | 0.157      | -            | -                | -                | -         |    -0.01 | advent, JamYoung, kaze, Mercury, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,500.91)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.387 | $7,000.00      | $2,706.71       |
| 2024-04-14 |      0.199 | $4,000.00      | $794.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
