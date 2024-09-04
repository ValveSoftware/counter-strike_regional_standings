### Roster Details<br />
Team Name: ex-Preasy<br />
Roster: Altekz, Kristou, refrezh, roeJ, TMB<br />
Global Rank: [152](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [100]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  694.0<br />
<br />
Final Rank Value (694.0) = Starting Rank Value (681.9) + Head To Head Adjustments (12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.9
- 400 + ( ( 0.142 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 681.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3916 | 2024-04-15 | Sashi         | L   | 0.253      | -            | -                | -                | -         |    -0.76 | Altekz, Kristou, refrezh, roeJ, TMB |
|           11 |     3944 | 2024-04-13 | 3DMAX         | L   | 0.239      | -            | -                | -                | -         |    -0.04 | Altekz, Kristou, refrezh, roeJ, TMB |
|           10 |     4096 | 2024-04-09 | kONO          | W   | 0.212      | 0.384        | 0.025 (0.002)    | 0.550 (0.045)    | 0 (0.000) |     4.64 | Altekz, Kristou, refrezh, roeJ, TMB |
|            9 |     4149 | 2024-04-07 | Zero Tenacity | W   | 0.199      | 0.358        | 0.138 (0.010)    | 1.000 (0.071)    | 0 (0.000) |     5.57 | Altekz, Kristou, refrezh, roeJ, TMB |
|            8 |     4455 | 2024-03-22 | FORZE         | L   | 0.093      | -            | -                | -                | -         |    -0.99 | Altekz, Kristou, refrezh, roeJ, TMB |
|            7 |     4534 | 2024-03-18 | Sampi         | W   | 0.065      | 0.371        | 0.033 (0.001)    | 1.000 (0.024)    | 0 (0.000) |     1.62 | Altekz, Kristou, refrezh, roeJ, TMB |
|            6 |     4574 | 2024-03-16 | Passion UA    | W   | 0.053      | 0.371        | 0.147 (0.003)    | 1.000 (0.020)    | 0 (0.000) |     1.46 | Altekz, Kristou, refrezh, roeJ, TMB |
|            5 |     4630 | 2024-03-14 | Entropiq      | W   | 0.038      | 0.371        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.32 | Altekz, Kristou, refrezh, roeJ, TMB |
|            4 |     4701 | 2024-03-11 | Metizport     | L   | 0.021      | -            | -                | -                | -         |    -0.27 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            3 |     4714 | 2024-03-11 | HEROIC        | L   | 0.020      | -            | -                | -                | -         |    -0.01 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            2 |     4717 | 2024-03-11 | Permitta      | W   | 0.019      | 0.371        | 0.032 (0.000)    | 0.988 (0.007)    | 0 (0.000) |     0.50 | Altekz, dupreeh, refrezh, roeJ, TMB |
|            1 |     4767 | 2024-03-09 | Fraud5        | W   | 0.005      | 0.371        | 0.002 (0.000)    | 0.025 (0.000)    | 0 (0.000) |     0.05 | Altekz, dupreeh, refrezh, roeJ, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,112.72)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.246 | $1,600.00      | $394.25         |
| 2024-03-18 |      0.065 | $11,000.00     | $718.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
