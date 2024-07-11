### Roster Details<br />
Team Name: Grannys Knockers<br />
Roster: Anlelele, b0RUP, Kristou, niko, TMB<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [76]( ../standings_europe.md)<br />
Final Rank Value:  845.5<br />
<br />
Final Rank Value (845.5) = Starting Rank Value (802.5) + Head To Head Adjustments (43.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.5
- 400 + ( ( 0.191 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 802.5


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
|           10 |     1451 | 2024-05-08 | Sashi             | L   | 0.772      | -            | -                | -                | -         |    -2.19 | Anlelele, b0RUP, Kristou, niko, TMB |
|            9 |     1475 | 2024-05-07 | Gaimin Gladiators | W   | 0.765      | 0.396        | 0.069 (0.021)    | 0.528 (0.160)    | 0 (0.000) |    20.61 | Anlelele, b0RUP, Kristou, niko, TMB |
|            8 |     1490 | 2024-05-06 | brazylijski luz   | W   | 0.758      | 0.396        | 0.011 (0.003)    | 0.281 (0.084)    | 0 (0.000) |    14.04 | Anlelele, b0RUP, Kristou, niko, TMB |
|            7 |     1567 | 2024-05-02 | Endpoint          | L   | 0.732      | -            | -                | -                | -         |    -7.27 | Anlelele, b0RUP, Kristou, niko, TMB |
|            6 |     1634 | 2024-04-29 | MOUZ NXT          | L   | 0.712      | -            | -                | -                | -         |    -4.08 | b0RUP, Kristou, niko, refrezh, TMB  |
|            5 |     1655 | 2024-04-28 | Nemiga            | W   | 0.705      | 0.435        | 0.498 (0.153)    | 0.678 (0.208)    | 0 (0.000) |    20.72 | b0RUP, Kristou, niko, refrezh, TMB  |
|            4 |     1728 | 2024-04-25 | Romania           | W   | 0.686      | 0.435        | 0.011 (0.003)    | 0.375 (0.112)    | 0 (0.000) |    12.82 | b0RUP, Kristou, niko, refrezh, TMB  |
|            3 |     1774 | 2024-04-23 | Sangal            | L   | 0.671      | -            | -                | -                | -         |    -2.76 | Anlelele, b0RUP, Kristou, niko, TMB |
|            2 |     1777 | 2024-04-22 | Zero Tenacity     | L   | 0.667      | -            | -                | -                | -         |    -3.57 | b0RUP, Kristou, niko, refrezh, TMB  |
|            1 |     1788 | 2024-04-22 | Permitta          | L   | 0.665      | -            | -                | -                | -         |    -5.33 | b0RUP, Kristou, niko, refrezh, TMB  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,114.85)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
