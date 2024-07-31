### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, Altekz, niko, valde, Zyphon<br />
Global Rank: [63](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
<br />
Final Rank Value:  985.1<br />
<br />
Final Rank Value (985.1) = Starting Rank Value (971.2) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.277<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 971.2
- 400 + ( ( 0.277 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 971.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       47 | 2024-07-30 | 9 Pandas         | W   | 1.000      | 0.500        | 0.083 (0.042)    | 0.579 (0.289)    | 0 (0.000) |    19.80 | acoR, Altekz, niko, valde, Zyphon |
|           15 |      103 | 2024-07-29 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -20.60 | acoR, Altekz, niko, valde, Zyphon |
|           14 |      131 | 2024-07-28 | 1WIN             | L   | 1.000      | -            | -                | -                | -         |   -16.38 | acoR, Altekz, niko, valde, Zyphon |
|           13 |      303 | 2024-07-22 | CPH Wolves       | L   | 1.000      | -            | -                | -                | -         |   -22.42 | acoR, Altekz, niko, valde, Zyphon |
|           12 |      347 | 2024-07-21 | Preasy           | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.222 (0.032)    | 0 (0.000) |     6.60 | acoR, Altekz, niko, valde, Zyphon |
|           11 |      451 | 2024-07-18 | Nexus            | L   | 1.000      | -            | -                | -                | -         |   -25.97 | acoR, Altekz, niko, valde, Zyphon |
|           10 |      475 | 2024-07-18 | LEON             | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.131 (0.019)    | 0 (0.000) |     3.47 | acoR, Altekz, niko, valde, Zyphon |
|            9 |      518 | 2024-07-17 | GUN5             | W   | 1.000      | 0.500        | 0.074 (0.037)    | 0.516 (0.258)    | 0 (0.000) |    11.64 | acoR, Altekz, niko, valde, Zyphon |
|            8 |      545 | 2024-07-17 | Into the Breach  | L   | 1.000      | -            | -                | -                | -         |   -28.69 | acoR, Altekz, niko, valde, Zyphon |
|            7 |      592 | 2024-07-16 | 500              | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.023 (0.008)    | 0 (0.000) |     0.80 | acoR, Altekz, niko, valde, Zyphon |
|            6 |      625 | 2024-07-15 | 3DMAX            | W   | 1.000      | 0.500        | 0.504 (0.252)    | 1.000 (0.500)    | 0 (0.000) |    27.01 | acoR, Altekz, niko, valde, Zyphon |
|            5 |      671 | 2024-07-13 | Sashi            | W   | 1.000      | 0.358        | 0.187 (0.067)    | 0.973 (0.348)    | 0 (0.000) |    23.01 | acoR, Altekz, niko, valde, Zyphon |
|            4 |      683 | 2024-07-12 | Johnny Speeds    | W   | 1.000      | 0.358        | 0.124 (0.044)    | 0.817 (0.293)    | 0 (0.000) |    25.25 | acoR, Altekz, niko, valde, Zyphon |
|            3 |      743 | 2024-07-09 | Passion UA       | W   | 1.000      | 0.358        | 0.172 (0.062)    | 1.000 (0.358)    | 0 (0.000) |    18.82 | acoR, Altekz, niko, valde, Zyphon |
|            2 |      762 | 2024-07-08 | FLuffy Gangsters | L   | 1.000      | -            | -                | -                | -         |   -27.27 | acoR, Altekz, niko, valde, Zyphon |
|            1 |      766 | 2024-07-08 | Passion UA       | W   | 1.000      | 0.358        | 0.172 (0.062)    | 1.000 (0.358)    | 0 (0.000) |    18.74 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,864.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
