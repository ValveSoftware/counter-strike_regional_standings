### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, diozera, fREQ, keiz, mxa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [47]( ../standings_americas.md)<br />
Final Rank Value:  616.8<br />
<br />
Final Rank Value (616.8) = Starting Rank Value (559.9) + Head To Head Adjustments (56.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 559.9
- 400 + ( ( 0.076 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 559.9


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
|           13 |       55 | 2024-07-08 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -2.60 | ckzao, diozera, fREQ, keiz, mxa |
|           12 |      498 | 2024-06-07 | RED Canids     | L   | 0.974      | -            | -                | -                | -         |    -0.84 | ckzao, diozera, fREQ, keiz, mxa |
|           11 |      697 | 2024-06-03 | Galorys        | W   | 0.947      | 0.371        | 0.026 (0.009)    | 0.519 (0.182)    | 0 (0.000) |    24.11 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |      773 | 2024-05-31 | Bounty Hunters | W   | 0.929      | 0.371        | 0.025 (0.009)    | 0.440 (0.151)    | 0 (0.000) |    24.56 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |      816 | 2024-05-30 | inSanitY       | L   | 0.920      | -            | -                | -                | -         |    -2.84 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |      850 | 2024-05-28 | FURIA Academy  | W   | 0.909      | 0.371        | 0.000 (0.000)    | 0.075 (0.025)    | 0 (0.000) |    13.19 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |     1324 | 2024-05-13 | Case           | L   | 0.808      | -            | -                | -                | -         |    -4.23 | bsd, ckzao, diozera, fREQ, mxa  |
|            6 |     1346 | 2024-05-12 | ODDIK          | L   | 0.801      | -            | -                | -                | -         |    -2.49 | bsd, ckzao, diozera, fREQ, mxa  |
|            5 |     1421 | 2024-05-09 | RED Canids     | L   | 0.781      | -            | -                | -                | -         |    -0.80 | bsd, ckzao, diozera, fREQ, mxa  |
|            4 |     1450 | 2024-05-08 | Yawara         | W   | 0.773      | 0.435        | 0.000 (0.000)    | 0.016 (0.005)    | 0 (0.000) |    10.64 | bsd, ckzao, diozera, fREQ, mxa  |
|            3 |     1486 | 2024-05-06 | RED Canids     | L   | 0.759      | -            | -                | -                | -         |    -0.74 | bsd, ckzao, diozera, fREQ, mxa  |
|            2 |     2751 | 2024-03-13 | Fluxo          | L   | 0.401      | -            | -                | -                | -         |    -0.65 | bsd, ckzao, diozera, mxa, roz   |
|            1 |     3415 | 2024-02-14 | Fluxo          | L   | 0.215      | -            | -                | -                | -         |    -0.38 | bsd, ckzao, diozera, mxa, roz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
