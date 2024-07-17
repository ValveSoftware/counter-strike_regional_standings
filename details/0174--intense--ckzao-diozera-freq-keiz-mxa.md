### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, diozera, fREQ, keiz, mxa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [48]( ../standings_americas.md)<br />
Final Rank Value:  661.7<br />
<br />
Final Rank Value (661.7) = Starting Rank Value (581.0) + Head To Head Adjustments (80.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.084<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 581.0
- 400 + ( ( 0.084 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 581.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       57 | 2024-07-16 | Galorys        | W   | 1.000      | 0.371        | 0.026 (0.010)    | 0.535 (0.198)    | 0 (0.000) |    23.06 | ckzao, diozera, fREQ, keiz, mxa |
|           15 |      133 | 2024-07-13 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -3.21 | ckzao, diozera, fREQ, keiz, mxa |
|           14 |      147 | 2024-07-12 | paiN Academy   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.31 | ckzao, diozera, fREQ, keiz, mxa |
|           13 |      219 | 2024-07-08 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -2.62 | ckzao, diozera, fREQ, keiz, mxa |
|           12 |      662 | 2024-06-07 | RED Canids     | L   | 0.934      | -            | -                | -                | -         |    -0.83 | ckzao, diozera, fREQ, keiz, mxa |
|           11 |      861 | 2024-06-03 | Galorys        | W   | 0.908      | 0.371        | 0.026 (0.009)    | 0.535 (0.180)    | 0 (0.000) |    23.36 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |      937 | 2024-05-31 | Bounty Hunters | W   | 0.889      | 0.371        | 0.030 (0.010)    | 0.441 (0.145)    | 0 (0.000) |    23.59 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |      980 | 2024-05-30 | inSanitY       | L   | 0.880      | -            | -                | -                | -         |    -2.69 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |     1014 | 2024-05-28 | FURIA Academy  | W   | 0.869      | 0.371        | 0.000 (0.000)    | 0.074 (0.024)    | 0 (0.000) |    12.13 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |     1488 | 2024-05-13 | Case           | L   | 0.768      | -            | -                | -                | -         |    -3.46 | bsd, ckzao, diozera, fREQ, mxa  |
|            6 |     1510 | 2024-05-12 | ODDIK          | L   | 0.762      | -            | -                | -                | -         |    -2.04 | bsd, ckzao, diozera, fREQ, mxa  |
|            5 |     1585 | 2024-05-09 | RED Canids     | L   | 0.742      | -            | -                | -                | -         |    -0.78 | bsd, ckzao, diozera, fREQ, mxa  |
|            4 |     1614 | 2024-05-08 | Yawara         | W   | 0.733      | 0.435        | 0.000 (0.000)    | 0.015 (0.005)    | 0 (0.000) |     9.49 | bsd, ckzao, diozera, fREQ, mxa  |
|            3 |     1650 | 2024-05-06 | RED Canids     | L   | 0.720      | -            | -                | -                | -         |    -0.72 | bsd, ckzao, diozera, fREQ, mxa  |
|            2 |     2915 | 2024-03-13 | Fluxo          | L   | 0.361      | -            | -                | -                | -         |    -0.61 | bsd, ckzao, diozera, mxa, roz   |
|            1 |     3579 | 2024-02-14 | Fluxo          | L   | 0.176      | -            | -                | -                | -         |    -0.33 | bsd, ckzao, diozera, mxa, roz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
