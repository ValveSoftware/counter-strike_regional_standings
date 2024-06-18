### Roster Details<br />
Team Name: PGE Turow<br />
Roster: azizz, darko, kadziu, Markoś, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  692.3<br />
<br />
Final Rank Value (692.3) = Starting Rank Value (694.9) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.9
- 400 + ( ( 0.145 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 694.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1886 | 2024-04-15 | Secret    | L   | 0.774      | -            | -                | -                | -         |   -15.66 | azizz, darko, kadziu, Markoś, Sobol       |
|           10 |     1960 | 2024-04-11 | Sampi     | L   | 0.747      | -            | -                | -                | -         |    -3.81 | azizz, darko, kadziu, Markoś, Sobol       |
|            9 |     2147 | 2024-04-05 | SAW       | L   | 0.707      | -            | -                | -                | -         |    -0.60 | azizz, darko, EXUS, kadziu, Markoś        |
|            8 |     2194 | 2024-04-04 | ECLOT     | L   | 0.700      | -            | -                | -                | -         |    -1.51 | darko, EXUS, kadziu, Markoś, Sobol        |
|            7 |     2230 | 2024-04-03 | Illuminar | W   | 0.695      | 0.333        | 0.015 (0.003)    | 0.399 (0.092)    | 0 (0.000) |    15.68 | darko, EXUS, kadziu, Markoś, Sobol        |
|            6 |     2999 | 2024-02-26 | ECLOT     | L   | 0.447      | -            | -                | -                | -         |    -0.77 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            5 |     3018 | 2024-02-25 | Sashi     | W   | 0.441      | 0.333        | 0.200 (0.029)    | 1.000 (0.147)    | 0 (0.000) |    12.89 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            4 |     3085 | 2024-02-22 | Permitta  | L   | 0.420      | -            | -                | -                | -         |    -2.36 | AxEcHo, darko, kadziu, Markoś, xKacpersky |
|            3 |     3990 | 2024-01-16 | 00NATION  | L   | 0.176      | -            | -                | -                | -         |    -4.26 | byali, darko, discoStar, kadziu, Markoś   |
|            2 |     4123 | 2024-01-12 | Betera    | L   | 0.150      | -            | -                | -                | -         |    -2.20 | byali, darko, discoStar, kadziu, Markoś   |
|            1 |     4249 | 2024-01-09 | fnatic    | L   | 0.129      | -            | -                | -                | -         |    -0.03 | darko, discoStar, gRuChA, kadziu, Markoś  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($587.09)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-06 |      0.714 | $500.00        | $356.77         |
| 2024-02-28 |      0.461 | $500.00        | $230.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
