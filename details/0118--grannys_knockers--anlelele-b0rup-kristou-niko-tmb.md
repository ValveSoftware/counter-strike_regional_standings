### Roster Details<br />
Team Name: Grannys Knockers<br />
Roster: Anlelele, b0RUP, Kristou, niko, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [118](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  847.0<br />
<br />
Final Rank Value (847.0) = Starting Rank Value (807.3) + Head To Head Adjustments (39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.3
- 400 + ( ( 0.190 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 807.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1615 | 2024-05-08 | Sashi             | L   | 0.733      | -            | -                | -                | -         |    -2.25 | Anlelele, b0RUP, Kristou, niko, TMB |
|            9 |     1639 | 2024-05-07 | Gaimin Gladiators | W   | 0.725      | 0.396        | 0.067 (0.019)    | 0.488 (0.140)    | 0 (0.000) |    18.98 | Anlelele, b0RUP, Kristou, niko, TMB |
|            8 |     1654 | 2024-05-06 | brazylijski luz   | W   | 0.718      | 0.396        | 0.012 (0.003)    | 0.282 (0.080)    | 0 (0.000) |    13.64 | Anlelele, b0RUP, Kristou, niko, TMB |
|            7 |     1731 | 2024-05-02 | Endpoint          | L   | 0.693      | -            | -                | -                | -         |    -6.94 | Anlelele, b0RUP, Kristou, niko, TMB |
|            6 |     1798 | 2024-04-29 | MOUZ NXT          | L   | 0.672      | -            | -                | -                | -         |    -3.96 | b0RUP, Kristou, niko, refrezh, TMB  |
|            5 |     1819 | 2024-04-28 | Nemiga            | W   | 0.666      | 0.435        | 0.498 (0.144)    | 0.725 (0.210)    | 0 (0.000) |    19.43 | b0RUP, Kristou, niko, refrezh, TMB  |
|            4 |     1892 | 2024-04-25 | Nexus             | W   | 0.646      | 0.435        | 0.011 (0.003)    | 0.432 (0.121)    | 0 (0.000) |    12.08 | b0RUP, Kristou, niko, refrezh, TMB  |
|            3 |     1938 | 2024-04-23 | Sangal            | L   | 0.632      | -            | -                | -                | -         |    -2.71 | Anlelele, b0RUP, Kristou, niko, TMB |
|            2 |     1941 | 2024-04-22 | Zero Tenacity     | L   | 0.627      | -            | -                | -                | -         |    -3.43 | b0RUP, Kristou, niko, refrezh, TMB  |
|            1 |     1952 | 2024-04-22 | Permitta          | L   | 0.625      | -            | -                | -                | -         |    -5.08 | b0RUP, Kristou, niko, refrezh, TMB  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,956.41)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
