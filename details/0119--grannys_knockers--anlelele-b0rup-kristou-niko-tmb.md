### Roster Details<br />
Team Name: Grannys Knockers<br />
Roster: Anlelele, b0RUP, Kristou, niko, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  808.1<br />
<br />
Final Rank Value (808.1) = Starting Rank Value (770.5) + Head To Head Adjustments (37.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 770.5
- 400 + ( ( 0.183 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 770.5


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
|           10 |     1903 | 2024-05-08 | Sashi             | L   | 0.686      | -            | -                | -                | -         |    -1.94 | Anlelele, b0RUP, Kristou, niko, TMB |
|            9 |     1927 | 2024-05-07 | Gaimin Gladiators | W   | 0.678      | 0.396        | 0.053 (0.014)    | 0.432 (0.116)    | 0 (0.000) |    17.27 | Anlelele, b0RUP, Kristou, niko, TMB |
|            8 |     1942 | 2024-05-06 | brazylijski luz   | W   | 0.671      | 0.396        | 0.010 (0.003)    | 0.300 (0.080)    | 0 (0.000) |    12.93 | Anlelele, b0RUP, Kristou, niko, TMB |
|            7 |     2019 | 2024-05-02 | Endpoint          | L   | 0.645      | -            | -                | -                | -         |    -6.31 | Anlelele, b0RUP, Kristou, niko, TMB |
|            6 |     2086 | 2024-04-29 | MOUZ NXT          | L   | 0.625      | -            | -                | -                | -         |    -3.72 | b0RUP, Kristou, niko, refrezh, TMB  |
|            5 |     2107 | 2024-04-28 | Nemiga            | W   | 0.618      | 0.435        | 0.415 (0.111)    | 0.707 (0.190)    | 0 (0.000) |    17.78 | b0RUP, Kristou, niko, refrezh, TMB  |
|            4 |     2180 | 2024-04-25 | Nexus             | W   | 0.599      | 0.435        | 0.018 (0.005)    | 0.480 (0.125)    | 0 (0.000) |    11.65 | b0RUP, Kristou, niko, refrezh, TMB  |
|            3 |     2226 | 2024-04-23 | Sangal            | L   | 0.584      | -            | -                | -                | -         |    -2.68 | Anlelele, b0RUP, Kristou, niko, TMB |
|            2 |     2229 | 2024-04-22 | Zero Tenacity     | L   | 0.580      | -            | -                | -                | -         |    -2.83 | b0RUP, Kristou, niko, refrezh, TMB  |
|            1 |     2240 | 2024-04-22 | Permitta          | L   | 0.578      | -            | -                | -                | -         |    -4.58 | b0RUP, Kristou, niko, refrezh, TMB  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,767.51)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
