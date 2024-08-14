### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, diozera, fREQ, keiz, mxa<br />
Global Rank: [125](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
<br />
Final Rank Value:  785.6<br />
<br />
Final Rank Value (785.6) = Starting Rank Value (731.8) + Head To Head Adjustments (53.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 731.8
- 400 + ( ( 0.168 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 731.8


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
|           24 |      420 | 2024-08-01 | Legacy         | L   | 1.000      | -            | -                | -                | -         |    -5.82 | ckzao, diozera, fREQ, keiz, mxa |
|           23 |      434 | 2024-08-01 | Fluxo          | L   | 1.000      | -            | -                | -                | -         |    -4.21 | ckzao, diozera, fREQ, keiz, mxa |
|           22 |      561 | 2024-07-29 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -8.28 | ckzao, diozera, fREQ, keiz, mxa |
|           21 |      599 | 2024-07-28 | Fluxo          | W   | 1.000      | 0.143        | 0.105 (0.015)    | 0.645 (0.092)    | 0 (0.000) |    26.88 | ckzao, diozera, fREQ, keiz, mxa |
|           20 |      761 | 2024-07-23 | Vikings KR     | W   | 1.000      | 0.371        | 0.008 (0.003)    | 0.478 (0.177)    | 0 (0.000) |    17.62 | ckzao, diozera, fREQ, keiz, mxa |
|           19 |      787 | 2024-07-22 | Case           | L   | 1.000      | -            | -                | -                | -         |   -10.45 | ckzao, diozera, fREQ, keiz, mxa |
|           18 |      837 | 2024-07-20 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -6.82 | ckzao, diozera, fREQ, keiz, mxa |
|           17 |      880 | 2024-07-19 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |    -3.54 | ckzao, diozera, fREQ, keiz, mxa |
|           16 |      911 | 2024-07-18 | Bounty Hunters | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.525 (0.195)    | 0 (0.000) |    22.80 | ckzao, diozera, fREQ, keiz, mxa |
|           15 |     1068 | 2024-07-16 | Galorys        | W   | 1.000      | 0.371        | 0.028 (0.010)    | 0.497 (0.184)    | 0 (0.000) |    18.37 | ckzao, diozera, fREQ, keiz, mxa |
|           14 |     1144 | 2024-07-13 | BESTIA         | L   | 0.987      | -            | -                | -                | -         |    -6.71 | ckzao, diozera, fREQ, keiz, mxa |
|           13 |     1158 | 2024-07-12 | paiN Academy   | W   | 0.979      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.78 | ckzao, diozera, fREQ, keiz, mxa |
|           12 |     1230 | 2024-07-08 | BESTIA         | L   | 0.954      | -            | -                | -                | -         |    -5.71 | ckzao, diozera, fREQ, keiz, mxa |
|           11 |     1673 | 2024-06-07 | RED Canids     | L   | 0.746      | -            | -                | -                | -         |    -2.32 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |     1872 | 2024-06-03 | Galorys        | W   | 0.720      | 0.371        | 0.028 (0.007)    | 0.497 (0.133)    | 0 (0.000) |    15.19 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |     1948 | 2024-05-31 | Bounty Hunters | W   | 0.701      | 0.371        | 0.021 (0.005)    | 0.525 (0.136)    | 0 (0.000) |    14.83 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |     1991 | 2024-05-30 | inSanitY       | L   | 0.692      | -            | -                | -                | -         |    -5.52 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |     2025 | 2024-05-28 | FURIA Academy  | W   | 0.682      | 0.371        | 0.000 (0.000)    | 0.098 (0.025)    | 0 (0.000) |     5.55 | ckzao, diozera, fREQ, keiz, mxa |
|            6 |     2499 | 2024-05-13 | Case           | L   | 0.580      | -            | -                | -                | -         |    -5.55 | bsd, ckzao, diozera, fREQ, mxa  |
|            5 |     2521 | 2024-05-12 | ODDIK          | L   | 0.574      | -            | -                | -                | -         |    -3.44 | bsd, ckzao, diozera, fREQ, mxa  |
|            4 |     2596 | 2024-05-09 | RED Canids     | L   | 0.554      | -            | -                | -                | -         |    -2.29 | bsd, ckzao, diozera, fREQ, mxa  |
|            3 |     2625 | 2024-05-08 | Yawara         | W   | 0.545      | 0.435        | 0.000 (0.000)    | 0.045 (0.011)    | 0 (0.000) |     3.91 | bsd, ckzao, diozera, fREQ, mxa  |
|            2 |     2661 | 2024-05-06 | RED Canids     | L   | 0.532      | -            | -                | -                | -         |    -2.23 | bsd, ckzao, diozera, fREQ, mxa  |
|            1 |     3926 | 2024-03-13 | Fluxo          | L   | 0.174      | -            | -                | -                | -         |    -2.21 | bsd, ckzao, diozera, mxa, roz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($750.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
