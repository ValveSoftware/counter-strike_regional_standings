### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, Altekz, niko, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  973.6<br />
<br />
Final Rank Value (973.6) = Starting Rank Value (938.2) + Head To Head Adjustments (35.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.429[<sup>1</sup>](#table2)
- Bounty Collected: 0.416[<sup>2</sup>](#table1)
- Opponent Network: 0.219[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.2
- 400 + ( ( 0.266 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 938.2


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
|           13 |       61 | 2024-07-22 | CPH Wolves       | L   | 1.000      | -            | -                | -                | -         |   -21.33 | acoR, Altekz, niko, valde, Zyphon |
|           12 |      105 | 2024-07-21 | Preasy           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.243 (0.035)    | 0 (0.000) |     7.64 | acoR, Altekz, niko, valde, Zyphon |
|           11 |      209 | 2024-07-18 | Nexus            | L   | 1.000      | -            | -                | -                | -         |   -25.11 | acoR, Altekz, niko, valde, Zyphon |
|           10 |      233 | 2024-07-18 | LEON             | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.149 (0.021)    | 0 (0.000) |     4.10 | acoR, Altekz, niko, valde, Zyphon |
|            9 |      276 | 2024-07-17 | GUN5             | W   | 1.000      | 0.500        | 0.093 (0.047)    | 0.489 (0.245)    | 0 (0.000) |    13.14 | acoR, Altekz, niko, valde, Zyphon |
|            8 |      303 | 2024-07-17 | Into the Breach  | L   | 1.000      | -            | -                | -                | -         |   -29.35 | acoR, Altekz, niko, valde, Zyphon |
|            7 |      350 | 2024-07-16 | 500              | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.027 (0.009)    | 0 (0.000) |     0.96 | acoR, Altekz, niko, valde, Zyphon |
|            6 |      383 | 2024-07-15 | 3DMAX            | W   | 1.000      | 0.500        | 0.175 (0.088)    | 1.000 (0.500)    | 0 (0.000) |    22.11 | acoR, Altekz, niko, valde, Zyphon |
|            5 |      429 | 2024-07-13 | Sashi            | W   | 1.000      | 0.358        | 0.234 (0.084)    | 1.000 (0.358)    | 0 (0.000) |    23.69 | acoR, Altekz, niko, valde, Zyphon |
|            4 |      441 | 2024-07-12 | Johnny Speeds    | W   | 1.000      | 0.358        | 0.154 (0.055)    | 0.858 (0.307)    | 0 (0.000) |    26.39 | acoR, Altekz, niko, valde, Zyphon |
|            3 |      501 | 2024-07-09 | Passion UA       | W   | 1.000      | 0.358        | 0.163 (0.058)    | 1.000 (0.358)    | 0 (0.000) |    19.79 | acoR, Altekz, niko, valde, Zyphon |
|            2 |      520 | 2024-07-08 | FLuffy Gangsters | L   | 1.000      | -            | -                | -                | -         |   -26.49 | acoR, Altekz, niko, valde, Zyphon |
|            1 |      524 | 2024-07-08 | Passion UA       | W   | 1.000      | 0.358        | 0.163 (0.058)    | 1.000 (0.358)    | 0 (0.000) |    19.79 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,864.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
