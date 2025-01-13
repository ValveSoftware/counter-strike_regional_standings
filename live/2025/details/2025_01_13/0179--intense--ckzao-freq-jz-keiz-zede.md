### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, fREQ, jz, keiz, zede<br />
Global Rank: [179](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [51]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  645.7<br />
<br />
Final Rank Value (645.7) = Starting Rank Value (653.6) + Head To Head Adjustments (-7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.6
- 400 + ( ( 0.128 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 653.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      995 | 2024-11-07 | Tropa do Taco      | L   | 0.755      | -            | -                | -                | -         |    -8.23 | ckzao, fREQ, jz, keiz, zede     |
|           13 |     1086 | 2024-11-02 | RED Canids Academy | L   | 0.723      | -            | -                | -                | -         |   -10.35 | ckzao, fREQ, jz, keiz, zede     |
|           12 |     1115 | 2024-11-01 | 2070               | W   | 0.715      | 0.333        | 0.003 (0.001)    | 0.216 (0.051)    | 0 (0.000) |    11.65 | ckzao, fREQ, jz, keiz, zede     |
|           11 |     3019 | 2024-08-26 | RED Canids         | L   | 0.269      | -            | -                | -                | -         |    -0.72 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |     3047 | 2024-08-26 | Solid              | L   | 0.267      | -            | -                | -                | -         |    -1.70 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |     3859 | 2024-08-01 | Legacy             | L   | 0.103      | -            | -                | -                | -         |    -0.46 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |     3873 | 2024-08-01 | Fluxo              | L   | 0.102      | -            | -                | -                | -         |    -0.27 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |     4000 | 2024-07-29 | BESTIA             | L   | 0.083      | -            | -                | -                | -         |    -0.24 | ckzao, diozera, fREQ, keiz, mxa |
|            6 |     4038 | 2024-07-28 | Fluxo              | W   | 0.075      | 0.143        | 0.131 (0.001)    | 0.549 (0.006)    | 0 (0.000) |     2.15 | ckzao, diozera, fREQ, keiz, mxa |
|            5 |     4200 | 2024-07-23 | ex-Vikings         | W   | 0.041      | 0.371        | 0.015 (0.000)    | 0.329 (0.005)    | 0 (0.000) |     0.77 | ckzao, diozera, fREQ, keiz, mxa |
|            4 |     4226 | 2024-07-22 | Case               | L   | 0.035      | -            | -                | -                | -         |    -0.40 | ckzao, diozera, fREQ, keiz, mxa |
|            3 |     4276 | 2024-07-20 | inSanitY           | L   | 0.022      | -            | -                | -                | -         |    -0.23 | ckzao, diozera, fREQ, keiz, mxa |
|            2 |     4319 | 2024-07-19 | RED Canids         | L   | 0.015      | -            | -                | -                | -         |    -0.04 | ckzao, diozera, fREQ, keiz, mxa |
|            1 |     4350 | 2024-07-18 | Bounty Hunters     | W   | 0.010      | 0.371        | 0.006 (0.000)    | 0.026 (0.000)    | 0 (0.000) |     0.15 | ckzao, diozera, fREQ, keiz, mxa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($809.75)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.728 | $1,000.00      | $727.96         |
| 2024-08-02 |      0.109 | $750.00        | $81.79          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
