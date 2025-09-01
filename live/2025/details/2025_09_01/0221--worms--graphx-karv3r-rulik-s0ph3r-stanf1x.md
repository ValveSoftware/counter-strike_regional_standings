### Roster Details<br />
Team Name: Worms<br />
Roster: graphX, karv3r, Rulik, S0ph3R, stanf1x<br />
Global Rank: [221](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [113]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  562.7<br />
<br />
Final Rank Value (562.7) = Starting Rank Value (583.0) + Head To Head Adjustments (-20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.229[<sup>1</sup>](#table2)
- Bounty Collected: 0.152[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.095<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 583.0
- 400 + ( ( 0.095 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 583.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2726 | 2025-04-09 | Chicken Coop  | L   | 0.236      | -            | -                | -                | -         |    -2.91 | graphX, karv3r, Rulik, S0ph3R, stanf1x  |
|           17 |     2728 | 2025-04-09 | Chicken Coop  | L   | 0.236      | -            | -                | -                | -         |    -2.97 | graphX, karv3r, Rulik, S0ph3R, stanf1x  |
|           16 |     2774 | 2025-04-08 | Arrival Seven | L   | 0.229      | -            | -                | -                | -         |    -2.12 | graphX, karv3r, Rulik, s1renaa, stanf1x |
|           15 |     2781 | 2025-04-08 | Arrival Seven | L   | 0.229      | -            | -                | -                | -         |    -2.16 | graphX, karv3r, Rulik, s1renaa, stanf1x |
|           14 |     2940 | 2025-04-02 | NRG           | L   | 0.189      | -            | -                | -                | -         |    -0.24 | graphX, karv3r, Rulik, s1renaa, stanf1x |
|           13 |     2950 | 2025-04-02 | NRG           | L   | 0.189      | -            | -                | -                | -         |    -0.24 | graphX, karv3r, Rulik, s1renaa, stanf1x |
|           12 |     3010 | 2025-04-01 | Akimbo        | L   | 0.183      | -            | -                | -                | -         |    -2.25 | karv3r, Rulik, S0ph3R, s1renaa, stanf1x |
|           11 |     3014 | 2025-04-01 | Akimbo        | L   | 0.183      | -            | -                | -                | -         |    -2.29 | karv3r, Rulik, S0ph3R, s1renaa, stanf1x |
|           10 |     3303 | 2025-03-26 | Aether        | L   | 0.143      | -            | -                | -                | -         |    -1.82 | karv3r, Rulik, S0ph3R, s1renaa, stanf1x |
|            9 |     3309 | 2025-03-26 | Aether        | L   | 0.143      | -            | -                | -                | -         |    -1.84 | karv3r, Rulik, S0ph3R, s1renaa, stanf1x |
|            8 |     3351 | 2025-03-25 | Legacy        | L   | 0.136      | -            | -                | -                | -         |    -0.07 | karv3r, Rulik, S0ph3R, s1renaa, stanf1x |
|            7 |     3355 | 2025-03-25 | Legacy        | L   | 0.136      | -            | -                | -                | -         |    -0.07 | karv3r, Rulik, S0ph3R, s1renaa, stanf1x |
|            6 |     3552 | 2025-03-18 | Chicken Coop  | L   | 0.090      | -            | -                | -                | -         |    -0.64 | graphX, karv3r, Rulik, s1renaa, stanf1x |
|            5 |     3555 | 2025-03-18 | Chicken Coop  | L   | 0.089      | -            | -                | -                | -         |    -0.64 | graphX, karv3r, Rulik, s1renaa, stanf1x |
|            4 |     3901 | 2025-03-07 | Outfit 49     | L   | 0.017      | -            | -                | -                | -         |    -0.34 | graphX, karv3r, Rulik, s1renaa, xsany   |
|            3 |     3912 | 2025-03-07 | Chicken Coop  | W   | 0.015      | 0.769        | 0.002 (0.000)    | 0.337 (0.004)    | 0 (0.000) |     0.37 | graphX, karv3r, Rulik, s1renaa, xsany   |
|            2 |     3994 | 2025-03-06 | Aether        | W   | 0.008      | 0.769        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     0.06 | graphX, karv3r, Rulik, s1renaa, xsany   |
|            1 |     4025 | 2025-03-05 | Take Flyte    | L   | 0.002      | -            | -                | -                | -         |    -0.04 | graphX, karv3r, Rulik, s1renaa, xsany   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($179.82)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.450 | $400.00        | $179.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
