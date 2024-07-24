### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, diozera, fREQ, keiz, mxa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  701.1<br />
<br />
Final Rank Value (701.1) = Starting Rank Value (594.5) + Head To Head Adjustments (106.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.093[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.5
- 400 + ( ( 0.096 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 594.5


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
|           21 |       38 | 2024-07-23 | Vikings KR     | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.415 (0.154)    | 0 (0.000) |    21.74 | ckzao, diozera, fREQ, keiz, mxa |
|           20 |       64 | 2024-07-22 | Case           | L   | 1.000      | -            | -                | -                | -         |    -7.21 | ckzao, diozera, fREQ, keiz, mxa |
|           19 |      114 | 2024-07-20 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -3.86 | ckzao, diozera, fREQ, keiz, mxa |
|           18 |      157 | 2024-07-19 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |    -1.65 | ckzao, diozera, fREQ, keiz, mxa |
|           17 |      188 | 2024-07-18 | Bounty Hunters | W   | 1.000      | 0.371        | 0.027 (0.010)    | 0.469 (0.174)    | 0 (0.000) |    26.57 | ckzao, diozera, fREQ, keiz, mxa |
|           16 |      345 | 2024-07-16 | Galorys        | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.592 (0.219)    | 0 (0.000) |    22.29 | ckzao, diozera, fREQ, keiz, mxa |
|           15 |      421 | 2024-07-13 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -3.67 | ckzao, diozera, fREQ, keiz, mxa |
|           14 |      435 | 2024-07-12 | paiN Academy   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.16 | ckzao, diozera, fREQ, keiz, mxa |
|           13 |      507 | 2024-07-08 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -3.03 | ckzao, diozera, fREQ, keiz, mxa |
|           12 |      950 | 2024-06-07 | RED Canids     | L   | 0.887      | -            | -                | -                | -         |    -1.09 | ckzao, diozera, fREQ, keiz, mxa |
|           11 |     1149 | 2024-06-03 | Galorys        | W   | 0.861      | 0.371        | 0.021 (0.007)    | 0.592 (0.189)    | 0 (0.000) |    21.54 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |     1225 | 2024-05-31 | Bounty Hunters | W   | 0.842      | 0.371        | 0.027 (0.008)    | 0.469 (0.146)    | 0 (0.000) |    21.78 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |     1268 | 2024-05-30 | inSanitY       | L   | 0.833      | -            | -                | -                | -         |    -3.13 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |     1302 | 2024-05-28 | FURIA Academy  | W   | 0.822      | 0.371        | 0.000 (0.000)    | 0.112 (0.034)    | 0 (0.000) |    10.77 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |     1776 | 2024-05-13 | Case           | L   | 0.721      | -            | -                | -                | -         |    -3.86 | bsd, ckzao, diozera, fREQ, mxa  |
|            6 |     1798 | 2024-05-12 | ODDIK          | L   | 0.714      | -            | -                | -                | -         |    -2.37 | bsd, ckzao, diozera, fREQ, mxa  |
|            5 |     1873 | 2024-05-09 | RED Canids     | L   | 0.694      | -            | -                | -                | -         |    -1.04 | bsd, ckzao, diozera, fREQ, mxa  |
|            4 |     1902 | 2024-05-08 | Yawara         | W   | 0.686      | 0.435        | 0.000 (0.000)    | 0.053 (0.016)    | 0 (0.000) |     8.55 | bsd, ckzao, diozera, fREQ, mxa  |
|            3 |     1938 | 2024-05-06 | RED Canids     | L   | 0.672      | -            | -                | -                | -         |    -0.97 | bsd, ckzao, diozera, fREQ, mxa  |
|            2 |     3203 | 2024-03-13 | Fluxo          | L   | 0.314      | -            | -                | -                | -         |    -0.63 | bsd, ckzao, diozera, mxa, roz   |
|            1 |     3867 | 2024-02-14 | Fluxo          | L   | 0.128      | -            | -                | -                | -         |    -0.27 | bsd, ckzao, diozera, mxa, roz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
